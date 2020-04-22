import { muxrpc, plugin } from 'secret-stack-decorators'
import * as t from 'io-ts'
import * as tp from 'io-ts-promise'

import { SubjectiveIdentity } from './model/SubjectiveIdentity'
import { FeedId, FeedIdCodec } from './model/Ids'
import { SubjectiveIdentityId, SubjectiveIdentityIdCodec } from './model/Ids'
import {
    AboutFeedIdMessage,
    Name,
    ImageLink,
    SubjectiveGroupAboutMessage,
    SubjectiveGroupAboutMessageSigned
} from './model/About'
import {
    IdentityKeysProvider,
    KeyPair,
    KeyPairCodec,
    PasswordBasedIdentityKeysProvider,
    StrongPassword
} from './model/IdentityKeysGenerator'

import { Source } from 'pull-stream'
import { Content, Msg } from 'ssb-typescript/readme'
import { getPackageVersion } from './model/Base'
import {
    SubjectiveGroupPlugin,
    SSBRequiredApi
} from './ssb-subjective-group-types'
import ssbKeys = require('ssb-keys')
import pify = require('pify')

import FlumeViewReduce = require('flumeview-reduce')

interface PReducedView<R> {
    get(): Promise<R>
    stream(): Source<R>
}

/**
 * subjective-group plugin
 * Scuttlebutt plugin that implement the concepts of subjective identity and groups
 */
@plugin(getPackageVersion())
// eslint-disable-next-line @typescript-eslint/class-name-casing
class subjectiveGroup implements SubjectiveGroupPlugin {
    readonly ssb: SSBRequiredApi
    readonly indexView: PReducedView<Array<SubjectiveIdentity>>

    constructor(ssb: SSBRequiredApi) {
        this.ssb = ssb

        const reduce: FlumeViewReduce.ReduceFunction<
            Msg<AboutFeedIdMessage | SubjectiveGroupAboutMessageSigned>,
            Array<SubjectiveIdentity>
        > = (index, msg) => {
            const content = msg.value
                .content as SubjectiveGroupAboutMessageSigned

            if (content.subjectiveId) {
                // TODO check signature

                const currentIdentityForFeed = index.find(identity =>
                    identity.allIds.includes(content.about)
                )

                if (currentIdentityForFeed) {
                    // we have a registered SI for this feed

                    if (FeedIdCodec.is(currentIdentityForFeed.id)) {
                        // was dummy identity
                        currentIdentityForFeed.id = content.subjectiveId
                    } else {
                        // TODO check same subjectiveId
                    }

                    currentIdentityForFeed.updateWith(content)
                } else {
                    const currentIdentityForSubjectiveId = index.find(
                        identity => identity.id == content.subjectiveId
                    )

                    if (currentIdentityForSubjectiveId) {
                        // we have a registered SI for another feed
                        currentIdentityForSubjectiveId.updateWith(content)
                    } else {
                        index.push(SubjectiveIdentity.from(content))
                    }
                }
            } else {
                // this is simple about message
                const currentIdentityForFeed = index.find(identity =>
                    identity.allIds.includes(content.about)
                )

                if (currentIdentityForFeed) {
                    currentIdentityForFeed.updateWith(content)
                } else {
                    index.push(SubjectiveIdentity.from(content))
                }
            }

            return index
        }

        const map: FlumeViewReduce.MapFunction<
            Msg<Content>,
            Msg<AboutFeedIdMessage>
        > = msg => {
            if (msg.value?.content?.type === 'about') {
                const content = msg.value.content as AboutFeedIdMessage
                if (FeedIdCodec.is(content.about))
                    return msg as Msg<AboutFeedIdMessage>
            }

            return null
        }

        this.indexView = pify(
            ssb._flumeUse(
                'subjectiveGroupIndex',
                FlumeViewReduce(
                    1,
                    reduce,
                    map,
                    undefined,
                    new Array<SubjectiveIdentity>()
                )
            )
        )
        /*
         TODO:
         - add verification of 'about' messages from followed stream to detected fraudulent claims of Subjective Identity
         - add voting -1 to block bad 'about' message
         - maintain an index of Subjective Identities -> feed-ids and feed-ids <- Identities (graph structure used in
         ssb-friends seems good for the job
         - think at a "trust" model to decide if a feed and the associated subjective identity is "trustable" (see
         posts about "subjective groups"
          */

        //var index = ssb._flumeUse('contacts2', Reduce(9, function (g, data) {

        //}
    }

    /**
     * @inheritdoc
     */
    @muxrpc('async')
    public async whoami(): Promise<SubjectiveIdentity> {
        // for each managed feed by the current server process (only 1 in current implementation of ssb-db),
        // check if feed is associated to a Subjective Identity.
        // If yes, check if some of the followed feeds refers to the same Subjective Identity and merge to complete the
        // returned profile.
        // If no, return a "dummy" SubjectiveIdentity with the feed id as "id".
        // (note: use similar indexes that backlink plugin)

        return this.about(this.ssb.id)
    }

    private static FeedIdOrSubjIdentIdArgsCodec = t.union([
        FeedIdCodec,
        SubjectiveIdentityIdCodec
    ])

    /**
     * @inheritdoc
     */
    @muxrpc('async')
    public async about(
        _id: FeedId | SubjectiveIdentityId
    ): Promise<SubjectiveIdentity> {
        const id = await tp.decode(
            subjectiveGroup.FeedIdOrSubjIdentIdArgsCodec,
            _id
        )

        const index = await this.indexView.get()

        if (id.startsWith('@')) {
            const result = index.find(identity => identity.feedIds.includes(id))
            if (result) return result

            // else return dummy profile
            return new SubjectiveIdentity(id, [id])
        } else {
            // subjective id
            const result = index.find(identity => identity.id === id)
            if (result) return result

            // else (note: do we need to try request our connected peers if not in our followed feeds ?)

            return Promise.reject('Unknown subjective identity for ${id}')
        }
    }

    /**
     * @inheritdoc
     */
    @muxrpc('async')
    async isFollowing(
        _id: FeedId | SubjectiveIdentityId
    ): Promise<Record<FeedId, boolean>> {
        const id = await tp.decode(
            subjectiveGroup.FeedIdOrSubjIdentIdArgsCodec,
            _id
        )

        return Promise.reject(`Not yet implemented ${id}`)
    }

    /**
     * @inheritdoc
     */
    @muxrpc('async')
    async isBlocking(
        _id: FeedId | SubjectiveIdentityId
    ): Promise<Record<FeedId, boolean>> {
        const id = await tp.decode(
            subjectiveGroup.FeedIdOrSubjIdentIdArgsCodec,
            _id
        )

        return Promise.reject(`Not yet implemented ${id}`)
    }

    /**
     * @inheritdoc
     */
    @muxrpc('async')
    async publishSubjectiveIdentity(
        identityKey: KeyPair | StrongPassword | IdentityKeysProvider,
        name?: Name,
        image?: ImageLink,
        description?: string
    ): Promise<SubjectiveIdentity> {
        const feedId: FeedId = this.ssb.id

        let keyPair: KeyPair

        if (typeof identityKey === 'string') {
            keyPair = await PasswordBasedIdentityKeysProvider(identityKey)()
        } else if (typeof identityKey === 'function') {
            keyPair = await identityKey().then(tp.decode(KeyPairCodec))
        } else if (KeyPairCodec.is(identityKey)) {
            keyPair = identityKey
        } else {
            keyPair = await Promise.reject<KeyPair>(
                "Invalid 'identityKey' argument type"
            )
        }

        const baseAboutMsg: SubjectiveGroupAboutMessage = {
            type: 'about',
            about: feedId,
            subjectiveId: `I${keyPair.public}`
        }

        if (name) baseAboutMsg.name = name
        if (image) baseAboutMsg.image = image
        if (description) baseAboutMsg.description = description

        const signedBaseAboutMsg = ssbKeys.signObj(
            keyPair.private,
            baseAboutMsg
        )

        const aboutMsg: SubjectiveGroupAboutMessageSigned = {
            ...baseAboutMsg,
            subjectiveIdSignature: signedBaseAboutMsg.signature
        }

        const publishedMessage: Msg<SubjectiveGroupAboutMessageSigned> = await pify(
            this.ssb.publish
        )(aboutMsg)

        return SubjectiveIdentity.from(publishedMessage.value.content)
    }

    /**
     * @inheritdoc
     */
    @muxrpc('source')
    createUserStream(id: FeedId | SubjectiveIdentityId): Source<Msg> {
        throw new Error(`Not yet implemented ${id}`)
    }
}

export = subjectiveGroup

// -------------------------------------------------------------------------------------
