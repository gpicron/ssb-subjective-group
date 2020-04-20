import * as t from 'io-ts'
import * as ssbTs from 'ssb-typescript'
import isCanonicalBase64 = require('is-canonical-base64')
import ssbRef = require('ssb-ref')

// TODO: make a pull request to incorporate io-ts codecs in 'ssb-typescript' instead of redefining it here

// ---------------------------------------------------------------------

/**
 * Regular expression matching Subjective Identity ID public key.  Similar to feed-id format but with 'I' as prefix.
 */
export const subjectiveIdentityIdRegExp: RegExp = isCanonicalBase64(
    'I',
    '.(?:sha256|ed25519)',
    32
)

/** @internal */
interface SubjectiveIdentityIdBrand {
    readonly SubjectiveIdentityId: unique symbol
}

/**
 * IO-TS Codec for SubjectiveIdentityId
 */
export const SubjectiveIdentityIdCodec = t.brand(
    t.string,
    (s: string): s is t.Branded<string, SubjectiveIdentityIdBrand> =>
        subjectiveIdentityIdRegExp.test(s),
    'SubjectiveIdentityId'
)

/**
 * Identifier of a subjective identity.  This is a public key prefixed by the letter 'I'.
 */
export type SubjectiveIdentityId = t.OutputOf<typeof SubjectiveIdentityIdCodec>

// ------------------------------------------------------------------------

// TODO: make a pull request to incorporate io-ts codecs in 'ssb-typescript' instead of redefining it here

/** @internal */
interface FeedIdBrand {
    readonly FeedId: unique symbol
}

/**
 * IO-TS Codec for FeedId
 */
export const FeedIdCodec = t.brand(
    t.string,
    (s: string): s is t.Branded<string, FeedIdBrand> => ssbRef.isFeedId(s),
    'FeedId'
)

/**
 * Identifier of a feed.  This is a public key prefixed by the letter '@'.
 */
export type FeedId = t.OutputOf<typeof FeedIdCodec> & ssbTs.FeedId

// ------------------------------------------------------------------------

/** @internal */
export interface BlobIdBrand {
    readonly BlobId: unique symbol
}

/**
 * IO-TS Codec for BlobId
 */
export const BlobIdCodec = t.brand(
    t.string,
    (s: string): s is t.Branded<string, BlobIdBrand> => ssbRef.isBlobId(s),
    'BlobId'
)

/**
 * Identifier of a blob ref.  This is a public key prefixed by the letter '&'.
 */
export type BlobId = t.OutputOf<typeof BlobIdCodec> & ssbTs.BlobId
