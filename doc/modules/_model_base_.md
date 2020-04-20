[ssb-social-index](../README.md) › ["model/base"](_model_base_.md)

# External module: "model/base"

## Index

### Interfaces

* [MimeTypeBrand](../interfaces/_model_base_.mimetypebrand.md)

### Type aliases

* [MimeType](_model_base_.md#mimetype)
* [PositiveInteger](_model_base_.md#positiveinteger)

### Variables

* [BufferCodec](_model_base_.md#const-buffercodec)
* [MimeTypeCodec](_model_base_.md#const-mimetypecodec)
* [PositiveIntegerCodec](_model_base_.md#const-positiveintegercodec)
* [mimeTypeRegExp](_model_base_.md#const-mimetyperegexp)

## Type aliases

###  MimeType

Ƭ **MimeType**: *t.OutputOf‹typeof MimeTypeCodec›*

Defined in model/base.ts:80

MimeType string as defined by RFC 2045 Section 5.1 and RFC 7231 Section 3.1.1.1.

___

###  PositiveInteger

Ƭ **PositiveInteger**: *t.OutputOf‹typeof PositiveIntegerCodec›*

Defined in model/base.ts:25

PositiveInteger ( > 0 and < safe integer number in javascript).

## Variables

### `Const` BufferCodec

• **BufferCodec**: *BrandC‹UnknownC‹›, BufferBrand›* = t.brand(
    t.unknown,
    (n: unknown): n is t.Branded<unknown, BufferBrand> => Buffer.isBuffer(n),
    'Buffer'
)

Defined in model/base.ts:37

IO-TS Codec for Buffer objects.

___

### `Const` MimeTypeCodec

• **MimeTypeCodec**: *BrandC‹StringC‹›, [MimeTypeBrand](../interfaces/_model_base_.mimetypebrand.md)›* = t.brand(
    t.string,
    (s: string): s is t.Branded<string, MimeTypeBrand> =>
        mimeTypeRegExp.test(s),
    'MimeType'
)

Defined in model/base.ts:70

IO-TS Codec for MimeType as defined by RFC 2045 Section 5.1 and RFC 7231 Section 3.1.1.1

___

### `Const` PositiveIntegerCodec

• **PositiveIntegerCodec**: *BrandC‹NumberC‹›, PositiveIntegerBrand›* = t.brand(
    t.number,
    (n: number): n is t.Branded<number, PositiveIntegerBrand> =>
        n > 0 && n < Number.MAX_SAFE_INTEGER,
    'PositiveInteger'
)

Defined in model/base.ts:15

IO-TS Codec for PositiveInteger ( > 0 and < safe integer number in javascript).

___

### `Const` mimeTypeRegExp

• **mimeTypeRegExp**: *RegExp‹›* = new RegExp(mediaType)

Defined in model/base.ts:60

Regular expression matching mime type strings as defined in RFC 2045 Section 5.1 and RFC 7231 Section 3.1.1.1
