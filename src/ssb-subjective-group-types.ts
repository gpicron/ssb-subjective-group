import { SubjectiveIdentity } from './model/SubjectiveIdentity'
import {
    IdentityKeysProvider,
    KeyPair,
    StrongPassword
} from './model/IdentityKeysGenerator'
import { FeedId } from './model/Ids'
import { SubjectiveIdentityId } from './model/Ids'
import { Name, ImageLink } from './model/About'
import { Source } from 'pull-stream'
import { Msg } from 'ssb-typescript/readme'

export interface SubjectiveGroupPlugin {
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
    whoami(): Promise<Set<SubjectiveIdentity>>

    /**
     * This procedure returns the Subjective Identity corresponding to passed id.
     *
     * @param id either a feed id (@...) or a subjective identity id (I...)
     */
    about(id: FeedId | SubjectiveIdentityId): Promise<SubjectiveIdentity>

    /**
     * This procedure is the same as friends.isFollowing but with feed id or subjective identity as input and it
     * returns the list of feeds known for the corresponding subjective identity with the status
     *
     * @param id either a feed id (@...) or a subjective identity id (I...)
     */
    isFollowing(
        id: FeedId | SubjectiveIdentityId
    ): Promise<Record<FeedId, boolean>>

    /**
     * This procedure is the same as friends.isBlocking but with feed id or subjective identity as input and it
     * returns the list of feeds known for the corresponding subjective identity with the status
     *
     * @param id either a feed id (@...) or a subjective identity id (I...)
     */
    isBlocking(
        id: FeedId | SubjectiveIdentityId
    ): Promise<Record<FeedId, boolean>>

    /**
     * Publish an 'about' message with the Subjective Identity signature and public key as commitment of ownership.
     *
     * @param identityKeyGenerator
     * @param _feedId
     * @param name
     * @param image
     * @param description
     */

    publishSubjectiveIdentity(
        identityKey: KeyPair | StrongPassword | IdentityKeysProvider,
        _feedId: FeedId,
        name?: Name,
        image?: ImageLink,
        description?: string
    ): Promise<void>

    /**
     * Returns a joined stream of all feeds if SubjectiveIdentityId is passed else fallback to default
     * createUserStream
     *
     * @param id
     */
    createUserStream(id: FeedId | SubjectiveIdentityId): Source<Msg>
}
