import * as t from 'io-ts'
import * as tp from 'io-ts-promise'
import ssbKeys = require('ssb-keys')
import chloride = require('chloride')

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
    public: Ed25519KeyInB64Codec,
    private: Ed25519KeyInB64Codec
})

export type KeyPair = t.TypeOf<typeof KeyPairCodec>

/**
 * Function signature of functions that provides the Subjective Identity KeyPair on demand.
 */
export type IdentityKeysProvider = () => Promise<KeyPair>

// ---------------------------------------------------------------------

import * as passwordTester from 'owasp-password-strength-test'

/** @hidden */
interface StrongPasswordBrand {
    readonly StrongPassword: unique symbol
}

export const StrongPasswordCodec = t.brand(
    t.string,
    (s: string): s is t.Branded<string, StrongPasswordBrand> =>
        passwordTester.test(s).strong,
    'StrongPassword'
)

export type StrongPassword = t.TypeOf<typeof StrongPasswordCodec>

// ---------------------------------------------------------------------

/**
 * This implementation of IdentityKeysGenerator take a password as seed for the key pair generation
 *
 * @param password
 * @constructor
 */
export function PasswordBasedIdentityKeysProvider(
    password: StrongPassword
): IdentityKeysProvider {
    return async () => {
        return tp
            .decode(StrongPasswordCodec, password)
            .then(Buffer.from)
            .then(chloride.crypto_hash)
            .then(p => ssbKeys.generate('ed25519', p) as KeyPair)
    }
}

/**
 * This implementation of IdentityKeysGenerator return the provided key pair (for instance stored locally)
 *
 * @param password
 * @constructor
 */
export function StoredIdentityKeysProvider(
    keys: KeyPair
): IdentityKeysProvider {
    return async () => {
        return tp.decode(KeyPairCodec, keys)
    }
}
