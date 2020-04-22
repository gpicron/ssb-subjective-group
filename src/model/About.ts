import * as t from 'io-ts'
import { PositiveIntegerCodec, MimeTypeCodec } from './base'
import { BlobIdCodec } from './ids'
import { FeedId, SubjectiveIdentityId } from './Ids'

// ----------------------------------------------

// TODO add codec

export interface AboutFeedIdMessage {
    type: 'about'
    about: FeedId
    name?: Name
    image?: ImageLink
    description?: string
}

/**
 * The base about message is signed with the subjectiveId key pair
 */
export interface SubjectiveGroupAboutMessage extends AboutFeedIdMessage {
    subjectiveId: SubjectiveIdentityId
}

/**
 * The base about message is signed with the subjectiveId key pair
 */
export interface SubjectiveGroupAboutMessageSigned
    extends SubjectiveGroupAboutMessage {
    subjectiveIdSignature: AboutMessageIdentitySignature
}

// TODO add codec (b64 + '.sig.'+curve)
type AboutMessageIdentitySignature = string

// ------------------------------------------------------------------------

// TODO: make a pull request to incorporate io-ts codecs in 'ssb-typescript' instead of redefining it here

/**
 * Rule for names in about message schema as suggested in Scuttlebot documentation.
 */
export const aboutNameRegExp = /^[A-z0-9._-]*[A-z0-9_-]$/

/** @hidden */
interface NameBrand {
    readonly AboutName: unique symbol
}

/**
 * IO-TS Codec for FeedId
 */
export const NameCodec = t.brand(
    t.string,
    (s: string): s is t.Branded<string, NameBrand> => aboutNameRegExp.test(s),
    'AboutName'
)

/**
 * Identifier of a feed.  This is a public key prefixed by the letter 'I'.
 */
export type Name = t.OutputOf<typeof NameCodec>

// ------------------------------------------------------------------------

/**
 * IO-TS Codec "image" reference with attributes (see 'about' messages)
 */
export const FullImageLinkCodec = t.intersection([
    t.type({
        link: BlobIdCodec
    }),
    t.partial({
        width: PositiveIntegerCodec,
        height: PositiveIntegerCodec,
        size: PositiveIntegerCodec,
        type: MimeTypeCodec
    })
])

/**
 * IO-TS Codec "image" reference with attributes or just the blobId (see 'about' messages)
 */
export const ImageLinkCodec = t.union([FullImageLinkCodec, BlobIdCodec])

/**
 * "image" reference attributes (see 'about' messages)
 */
export type ImageLink = t.OutputOf<typeof ImageLinkCodec>
