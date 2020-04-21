import * as t from 'io-ts'

// TODO: make a pull request to incorporate io-ts codecs in 'ssb-typescript' instead of redefining it here

// ------------------------------------------------------------------------

/** @hidden */
export interface PositiveIntegerBrand {
    readonly PositiveInteger: unique symbol
}

/**
 * IO-TS Codec for PositiveInteger ( > 0 and < safe integer number in javascript).
 */
export const PositiveIntegerCodec = t.brand(
    t.number,
    (n: number): n is t.Branded<number, PositiveIntegerBrand> =>
        n > 0 && n < Number.MAX_SAFE_INTEGER,
    'PositiveInteger'
)

/**
 * PositiveInteger ( > 0 and < safe integer number in javascript).
 */
export type PositiveInteger = t.OutputOf<typeof PositiveIntegerCodec>

// ------------------------------------------------------------------------

/** @hidden */
interface BufferBrand {
    readonly Buffer: unique symbol
}

/**
 * IO-TS Codec for Buffer objects.
 */
export const BufferCodec = t.brand(
    t.unknown,
    (n: unknown): n is t.Branded<unknown, BufferBrand> => Buffer.isBuffer(n),
    'Buffer'
)

// ------------------------------------------------------------------------

import * as vmt from 'valid-mimetype'

/** @hidden */
export interface MimeTypeBrand {
    readonly MimeType: unique symbol
}

/**
 * IO-TS Codec for MimeType as defined by RFC 2045 Section 5.1 and RFC 7231 Section 3.1.1.1
 */
export const MimeTypeCodec = t.brand(
    t.string,
    (s: string): s is t.Branded<string, MimeTypeBrand> =>
        vmt.isValidMimeType(s),
    'MimeType'
)

/**
 * MimeType string as defined by RFC 2045 Section 5.1 and RFC 7231 Section 3.1.1.1.
 */
export type MimeType = t.OutputOf<typeof MimeTypeCodec>

// ----------------------

import semverRegex = require('semver-regex')

/** @hidden */
interface VersionBrand {
    readonly Version: unique symbol
}

export const VersionCodec = t.brand(
    t.string,
    (s): s is t.Branded<string, VersionBrand> => semverRegex().test(s),
    'Version'
)

export type Version = t.OutputOf<typeof VersionCodec>

import packageJson = require('../../package.json')

/**
 * Returns the package version from the package.json file
 */
export function getPackageVersion(): Version {
    const versionInput = packageJson.version
    if (VersionCodec.is(versionInput)) {
        return versionInput
    } else {
        throw new Error(
            'Invalid version specified in package.json.  Do not follow semver syntax'
        )
    }
}
