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

/** @internal */
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

// based on the intersection of the grammar from RFC 2045 Section 5.1 and RFC 7231 Section 3.1.1.1
const ows = '[ \t]*'
const token = "[0-9A-Za-z!#$%&'*+.^_`|~-]+"
const quotedString = '"(?:[^"\\\\]|\\.)*"'
const type =
    '(application|audio|font|example|image|message|model|multipart|text|video|x-(?:' +
    token +
    '))'
const parameter =
    ';' + ows + token + '=' + '(?:' + token + '|' + quotedString + ')'
const mediaType = type + '/' + '(' + token + ')((?:' + ows + parameter + ')*)'

/**
 * Regular expression matching mime type strings as defined in RFC 2045 Section 5.1 and RFC 7231 Section 3.1.1.1
 */
export const mimeTypeRegExp = new RegExp(mediaType)

/** @internal */
export interface MimeTypeBrand {
    readonly MimeType: unique symbol
}

/**
 * IO-TS Codec for MimeType as defined by RFC 2045 Section 5.1 and RFC 7231 Section 3.1.1.1
 */
export const MimeTypeCodec = t.brand(
    t.string,
    (s: string): s is t.Branded<string, MimeTypeBrand> =>
        mimeTypeRegExp.test(s),
    'MimeType'
)

/**
 * MimeType string as defined by RFC 2045 Section 5.1 and RFC 7231 Section 3.1.1.1.
 */
export type MimeType = t.OutputOf<typeof MimeTypeCodec>
