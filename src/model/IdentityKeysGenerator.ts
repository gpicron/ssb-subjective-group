import * as t from 'io-ts'
import ssbKeys = require('ssb-keys')
import isCanonicalBase64 = require('is-canonical-base64')

// ---------------------------------------------------------------------

/** @hidden */
const keyRegExp: RegExp = isCanonicalBase64('', '.ed25519', 32)

/** @hidden */
interface Ed25519KeyInB64Brand {
    readonly Ed25519KeyInB64: unique symbol
}

const Ed25519KeyInB64Codec = t.brand(
    t.string,
    (s: string): s is t.Branded<string, Ed25519KeyInB64Brand> =>
        keyRegExp.test(s),
    'Ed25519KeyInB64'
)

// ---------------------------------------------------------------------

export const KeyPairCodec = t.strict({
    curve: t.literal('ed25519'),
    pub: Ed25519KeyInB64Codec,
    private: Ed25519KeyInB64Codec
})

export type KeyPair = t.TypeOf<typeof KeyPairCodec>

export type IdentityKeysGenerator = () => KeyPair

// ---------------------------------------------------------------------

export function PasswordBasedIdentityKeysGenerator(password: string) {
    return () => {
        return ssbKeys.generate('ed25519', password) as KeyPair
    }
}
