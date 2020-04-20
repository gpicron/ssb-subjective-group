import { muxrpc, plugin } from 'secret-stack-decorators'
import * as t from 'io-ts'
import * as tp from 'io-ts-promise'

import { SubjectiveIdentity } from './model/SubjectiveIdentity'
import * as ids from './model/Ids'
import { FeedId } from './model/Ids'
import * as about from './model/About'
import { IdentityKeysGenerator, KeyPair } from './model/IdentityKeysGenerator'
import ssbKeys = require('ssb-keys')

import { Source } from 'pull-stream'
import { Msg } from 'ssb-typescript/readme'
import { SubjectiveGroupAboutMessage } from './model/About'

interface SSBApi {
    publish: (msq: SubjectiveGroupAboutMessage) => void
}

/**
 * subjective-group plugin
 * Scuttlebutt plugin that implement the concepts of subjective identity and groups
 */
@plugin('2.0.0')
// eslint-disable-next-line @typescript-eslint/class-name-casing
class subjectiveGroup {
    private readonly ssb: SSBApi

    constructor(ssb: SSBApi) {
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
     * This procedure returns all the subjective identities attached to the feeds owned by the current ssb server.
     * (Note: currently all systems are using ssb-db which create 1 feed per server, so the returned Set will return 1
     * element)
     *
     * There is only 1 subjective identity per feed (corresponding to the last published 'about' message on that feed).
     * If the last about message is not containing a subjective identity public key, the returned identity is not a subjective
     * identity but the feed_id.
     *
     * The same subjective identity can be used on several feeds and on several devices (on laptop, on mobile, etc.)
     *
     * The subjective identity unique key is the public key of an ed25519 key pair.
     *
     */
    @muxrpc('async')
    public async whoami(): Promise<Set<SubjectiveIdentity>> {
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
     * This procedure returns the Subjective Identity corresponding to passed id.
     *
     * @param id either a feed id (@...) or a subjective identity id (I...)
     */
    @muxrpc('async')
    public async about(
        id: ids.FeedId | ids.SubjectiveIdentityId
    ): Promise<SubjectiveIdentity> {
        return tp
            .decode(subjectiveGroup.FeedIdOrSubjIdentIdArgsCodec, id)
            .then(id => {
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

                    return Promise.reject(
                        'Unknown subjective identity for ${id}'
                    )
                }
            })
    }

    /**
     * This procedure is the same as friends.isFollowing but with feed id or subjective identity as input and it
     * returns the list of feeds known for the corresponding subjective identity with the status
     *
     * @param id either a feed id (@...) or a subjective identity id (I...)
     */
    @muxrpc('async')
    public async isFollowing(
        id: ids.FeedId | ids.SubjectiveIdentityId
    ): Promise<Record<FeedId, boolean>> {
        return tp
            .decode(subjectiveGroup.FeedIdOrSubjIdentIdArgsCodec, id)
            .then(async id => {
                return Promise.reject(`Not yet implemented ${id}`)
            })
    }

    /**
     * This procedure is the same as friends.isBlocking but with feed id or subjective identity as input and it
     * returns the list of feeds known for the corresponding subjective identity with the status
     *
     * @param id either a feed id (@...) or a subjective identity id (I...)
     */
    @muxrpc('async')
    public async isBlocking(
        id: ids.FeedId | ids.SubjectiveIdentityId
    ): Promise<Record<FeedId, boolean>> {
        return tp
            .decode(subjectiveGroup.FeedIdOrSubjIdentIdArgsCodec, id)
            .then(async id => {
                return Promise.reject(`Not yet implemented ${id}`)
            })
    }

    /**
     * Publish an 'about' message with the Subjective Identity signature and public key as commitment of ownership.
     *
     * @param identity_key_generator
     * @param _feedId
     * @param name
     * @param image
     * @param description
     */

    @muxrpc('async')
    public async publishSubjectiveIdentity(
        identityKeyGenerator: IdentityKeysGenerator,
        _feedId: FeedId,
        name?: about.Name,
        image?: about.ImageLink,
        description?: string
    ): Promise<void> {
        const feedId: FeedId = await tp.decode(ids.FeedIdCodec, _feedId)

        return Promise.resolve(identityKeyGenerator)
            .then(tp.decode(KeyPair))
            .then(keyPair => {
                const aboutMsg = {
                    about: feedId,
                    name: name,
                    image: image,
                    description: description
                } as about.AboutMessage

                const signature = ssbKeys.signObj(keyPair.private, aboutMsg)

                return {
                    ...aboutMsg,
                    subjectiveId: keyPair.pub,
                    subjectiveIdSignature: signature
                } as about.SubjectiveGroupAboutMessage
            })
            .then(msg => this.ssb.publish(msg))
    }

    /**
     * Returns a joined stream of all feeds if SubjectiveIdentityId is passed else fallback to default
     * createUserStream
     *
     * @param id
     */
    @muxrpc('source')
    public createUserStream(
        id: ids.FeedId | ids.SubjectiveIdentityId
    ): Source<Msg> {
        throw new Error(`Not yet implemented ${id}`)
    }
}

export = subjectiveGroup
