[ssb-social-index](../README.md) › ["model/ids"](_model_ids_.md)

# External module: "model/ids"

## Index

### Interfaces

* [BlobIdBrand](../interfaces/_model_ids_.blobidbrand.md)

### Type aliases

* [BlobId](_model_ids_.md#blobid)
* [FeedId](_model_ids_.md#feedid)
* [SubjectiveIdentityId](_model_ids_.md#subjectiveidentityid)

### Variables

* [BlobIdCodec](_model_ids_.md#const-blobidcodec)
* [FeedIdCodec](_model_ids_.md#const-feedidcodec)
* [SubjectiveIdentityIdCodec](_model_ids_.md#const-subjectiveidentityidcodec)
* [subjectiveIdentityIdRegExp](_model_ids_.md#const-subjectiveidentityidregexp)

## Type aliases

###  BlobId

Ƭ **BlobId**: *t.OutputOf‹typeof BlobIdCodec› & ssbTs.BlobId*

Defined in model/ids.ts:81

Identifier of a blob ref.  This is a public key prefixed by the letter '&'.

___

###  FeedId

Ƭ **FeedId**: *t.OutputOf‹typeof FeedIdCodec› & ssbTs.FeedId*

Defined in model/ids.ts:60

Identifier of a feed.  This is a public key prefixed by the letter '@'.

___

###  SubjectiveIdentityId

Ƭ **SubjectiveIdentityId**: *t.OutputOf‹typeof SubjectiveIdentityIdCodec›*

Defined in model/ids.ts:37

Identifier of a subjective identity.  This is a public key prefixed by the letter 'I'.

## Variables

### `Const` BlobIdCodec

• **BlobIdCodec**: *BrandC‹StringC‹›, [BlobIdBrand](../interfaces/_model_ids_.blobidbrand.md)›* = t.brand(
    t.string,
    (s: string): s is t.Branded<string, BlobIdBrand> => ssbRef.isBlobId(s),
    'BlobId'
)

Defined in model/ids.ts:72

IO-TS Codec for BlobId

___

### `Const` FeedIdCodec

• **FeedIdCodec**: *BrandC‹StringC‹›, FeedIdBrand›* = t.brand(
    t.string,
    (s: string): s is t.Branded<string, FeedIdBrand> => ssbRef.isFeedId(s),
    'FeedId'
)

Defined in model/ids.ts:51

IO-TS Codec for FeedId

___

### `Const` SubjectiveIdentityIdCodec

• **SubjectiveIdentityIdCodec**: *BrandC‹StringC‹›, SubjectiveIdentityIdBrand›* = t.brand(
    t.string,
    (s: string): s is t.Branded<string, SubjectiveIdentityIdBrand> =>
        subjectiveIdentityIdRegExp.test(s),
    'SubjectiveIdentityId'
)

Defined in model/ids.ts:27

IO-TS Codec for SubjectiveIdentityId

___

### `Const` subjectiveIdentityIdRegExp

• **subjectiveIdentityIdRegExp**: *RegExp* = isCanonicalBase64(
    'I',
    '.(?:sha256|ed25519)',
    32
)

Defined in model/ids.ts:13

Regular expression matching Subjective Identity ID public key.  Similar to feed-id format but with 'I' as prefix.
