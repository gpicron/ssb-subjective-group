import { muxrpc, plugin } from 'secret-stack-decorators'
import * as t from 'io-ts'
import * as tp from 'io-ts-promise'

import { SubjectiveIdentity } from './model/SubjectiveIdentity'
import * as ids from './model/Ids'
import { FeedId } from './model/Ids'
import * as about from './model/About'
import { SubjectiveGroupAboutMessage } from './model/About'
import {
    IdentityKeysGenerator,
    KeyPair,
    KeyPairCodec
} from './model/IdentityKeysGenerator'

import { Source } from 'pull-stream'
import { Msg } from 'ssb-typescript/readme'
import { getPackageVersion } from './model/Base'
import { SubjectiveGroupPlugin } from './ssb-subjective-group-types'
import ssbKeys = require('ssb-keys')

interface SSBRequiredApi {
    publish: (msq: SubjectiveGroupAboutMessage) => void
}

/**
 * subjective-group plugin
 * Scuttlebutt plugin that implement the concepts of subjective identity and groups
 */
@plugin(getPackageVersion()) // TODO pull request to ssb-decorator to propose using the package version by default
// eslint-disable-next-line @typescript-eslint/class-name-casing
class subjectiveGroup implements SubjectiveGroupPlugin {
    private readonly ssb: SSBRequiredApi

    constructor(ssb: SSBRequiredApi) {
        this.ssb = ssb

        /*
         TODO:
         - add verification of 'about' messages from followed stream to detected fraudulent claims of Subjective Identity
         - add voting -1 to block bad 'about' message
         - maintain an index of Subjective Identities -> feed-ids and feed-ids <- Identities (graph structure used in
         ssb-friends seems good for the job
         - think at a "trust" model to decide if a feed and the associated subjective identity is "trustable" (see
         posts about "subjective groups"
          */
    }

    /**
     * @inheritdoc
     */
    @muxrpc('async')
    async whoami(): Promise<Set<SubjectiveIdentity>> {
        // for each managed feed by the current server process (only 1 in current implementation of ssb-db),
        // check if feed is associated to a Subjective Identity.
        // If yes, check if some of the followed feeds refers to the same Subjective Identity and merge to complete the
        // returned profile.
        // If no, return a "dummy" SubjectiveIdentity with the feed id as "id".
        // (note: use similar indexes that backlink plugin)

        return Promise.reject('Not yet implemented')
    }

    private static FeedIdOrSubjIdentIdArgsCodec = t.union([
        ids.FeedIdCodec,
        ids.SubjectiveIdentityIdCodec
    ])

    /**
     * @inheritdoc
     */
    @muxrpc('async')
    async about(
        _id: ids.FeedId | ids.SubjectiveIdentityId
    ): Promise<SubjectiveIdentity> {
        const id = await tp.decode(
            subjectiveGroup.FeedIdOrSubjIdentIdArgsCodec,
            _id
        )

        if (id.startsWith('@')) {
            // feed id
            //  check if corresponding feed is associated to a Subjective Identity.
            // If yes, check if some of the followed feeds refers to the same Subjective Identity and merge to complete the
            // returned profile.

            // TODO ...

            // else return dummy profile
            return new SubjectiveIdentity(id, [id])
        } else {
            // subjective id
            // check if corresponding Subjective Identity is in our index

            // TODO ...

            // else (note: do we need to try request our connected peers if not in our followed feeds ?)

            return Promise.reject('Unknown subjective identity for ${id}')
        }
    }

    /**
     * @inheritdoc
     */
    @muxrpc('async')
    async isFollowing(
        _id: ids.FeedId | ids.SubjectiveIdentityId
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
        _id: ids.FeedId | ids.SubjectiveIdentityId
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
        identityKeyGenerator: IdentityKeysGenerator,
        _feedId: FeedId,
        name?: about.Name,
        image?: about.ImageLink,
        description?: string
    ): Promise<void> {
        const feedId: FeedId = await tp.decode(ids.FeedIdCodec, _feedId)
        const keyPair: KeyPair = await Promise.resolve(
            identityKeyGenerator
        ).then(tp.decode(KeyPairCodec))

        const baseAboutMsg: about.AboutMessage = {
            about: feedId,
            name: name,
            image: image,
            description: description
        }

        const signature = ssbKeys.signObj(keyPair.private, baseAboutMsg)

        const aboutMsg: about.SubjectiveGroupAboutMessage = {
            ...baseAboutMsg,
            subjectiveId: keyPair.pub,
            subjectiveIdSignature: signature
        }

        this.ssb.publish(aboutMsg)
    }

    /**
     * @inheritdoc
     */
    @muxrpc('source')
    createUserStream(id: ids.FeedId | ids.SubjectiveIdentityId): Source<Msg> {
        throw new Error(`Not yet implemented ${id}`)
    }
}

export = subjectiveGroup
