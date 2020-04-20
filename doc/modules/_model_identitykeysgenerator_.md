[ssb-social-index](../README.md) › ["model/IdentityKeysGenerator"](_model_identitykeysgenerator_.md)

# External module: "model/IdentityKeysGenerator"

## Index

### Type aliases

* [IdentityKeysGenerator](_model_identitykeysgenerator_.md#identitykeysgenerator)
* [KeyPair](_model_identitykeysgenerator_.md#keypair)

### Variables

* [KeyPair](_model_identitykeysgenerator_.md#const-keypair)

### Functions

* [PasswordBasedIdentityKeysGenerator](_model_identitykeysgenerator_.md#passwordbasedidentitykeysgenerator)

## Type aliases

###  IdentityKeysGenerator

Ƭ **IdentityKeysGenerator**: *function*

*Defined in [model/IdentityKeysGenerator.ts:33](https://github.com/gpicron/ssb-subjective-group/blob/ffd218b/src/model/IdentityKeysGenerator.ts#L33)*

#### Type declaration:

▸ (): *[KeyPair](_model_identitykeysgenerator_.md#keypair)*

___

###  KeyPair

Ƭ **KeyPair**: *t.TypeOf‹typeof KeyPair›*

*Defined in [model/IdentityKeysGenerator.ts:31](https://github.com/gpicron/ssb-subjective-group/blob/ffd218b/src/model/IdentityKeysGenerator.ts#L31)*

## Variables

### `Const` KeyPair

• **KeyPair**: *ExactC‹TypeC‹object››* = t.strict({
    curve: t.literal('ed25519'),
    pub: Ed25519KeyInB64Codec,
    private: Ed25519KeyInB64Codec
})

*Defined in [model/IdentityKeysGenerator.ts:25](https://github.com/gpicron/ssb-subjective-group/blob/ffd218b/src/model/IdentityKeysGenerator.ts#L25)*

## Functions

###  PasswordBasedIdentityKeysGenerator

▸ **PasswordBasedIdentityKeysGenerator**(`password`: string): *(Anonymous function)*

*Defined in [model/IdentityKeysGenerator.ts:37](https://github.com/gpicron/ssb-subjective-group/blob/ffd218b/src/model/IdentityKeysGenerator.ts#L37)*

**Parameters:**

Name | Type |
------ | ------ |
`password` | string |

**Returns:** *(Anonymous function)*
