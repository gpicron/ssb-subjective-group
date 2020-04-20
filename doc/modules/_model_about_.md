[ssb-social-index](../README.md) › ["model/About"](_model_about_.md)

# External module: "model/About"

## Index

### Type aliases

* [AboutMessage](_model_about_.md#aboutmessage)
* [ImageLink](_model_about_.md#imagelink)
* [Name](_model_about_.md#name)
* [SubjectiveGroupAboutMessage](_model_about_.md#subjectivegroupaboutmessage)

### Variables

* [FullImageLinkCodec](_model_about_.md#const-fullimagelinkcodec)
* [ImageLinkCodec](_model_about_.md#const-imagelinkcodec)
* [NameCodec](_model_about_.md#const-namecodec)
* [aboutNameRegExp](_model_about_.md#const-aboutnameregexp)

## Type aliases

###  AboutMessage

Ƭ **AboutMessage**: *object*

*Defined in [model/About.ts:10](https://github.com/gpicron/ssb-subjective-group/blob/ffd218b/src/model/About.ts#L10)*

#### Type declaration:

* **about**: *[FeedId](_model_ids_.md#feedid)*

* **description**? : *undefined | string*

* **image**? : *[ImageLink](_model_about_.md#imagelink)*

* **name**? : *[Name](_model_about_.md#name)*

___

###  ImageLink

Ƭ **ImageLink**: *t.OutputOf‹typeof ImageLinkCodec›*

*Defined in [model/About.ts:81](https://github.com/gpicron/ssb-subjective-group/blob/ffd218b/src/model/About.ts#L81)*

"image" reference attributes (see 'about' messages)

___

###  Name

Ƭ **Name**: *t.OutputOf‹typeof NameCodec›*

*Defined in [model/About.ts:54](https://github.com/gpicron/ssb-subjective-group/blob/ffd218b/src/model/About.ts#L54)*

Identifier of a feed.  This is a public key prefixed by the letter 'I'.

___

###  SubjectiveGroupAboutMessage

Ƭ **SubjectiveGroupAboutMessage**: *[AboutMessage](_model_about_.md#aboutmessage) & object*

*Defined in [model/About.ts:20](https://github.com/gpicron/ssb-subjective-group/blob/ffd218b/src/model/About.ts#L20)*

The base about message is signed with the subjectiveId key pair

## Variables

### `Const` FullImageLinkCodec

• **FullImageLinkCodec**: *IntersectionC‹[TypeC‹object›, PartialC‹object›]›* = t.intersection([
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

*Defined in [model/About.ts:61](https://github.com/gpicron/ssb-subjective-group/blob/ffd218b/src/model/About.ts#L61)*

IO-TS Codec "image" reference with attributes (see 'about' messages)

___

### `Const` ImageLinkCodec

• **ImageLinkCodec**: *UnionC‹[IntersectionC‹[TypeC‹object›, PartialC‹object›]›, BrandC‹StringC‹›, [BlobIdBrand](../interfaces/_model_ids_.blobidbrand.md)›]›* = t.union([FullImageLinkCodec, BlobIdCodec])

*Defined in [model/About.ts:76](https://github.com/gpicron/ssb-subjective-group/blob/ffd218b/src/model/About.ts#L76)*

IO-TS Codec "image" reference with attributes or just the blobId (see 'about' messages)

___

### `Const` NameCodec

• **NameCodec**: *BrandC‹StringC‹›, NameBrand›* = t.brand(
    t.string,
    (s: string): s is t.Branded<string, NameBrand> => aboutNameRegExp.test(s),
    'AboutName'
)

*Defined in [model/About.ts:45](https://github.com/gpicron/ssb-subjective-group/blob/ffd218b/src/model/About.ts#L45)*

IO-TS Codec for FeedId

___

### `Const` aboutNameRegExp

• **aboutNameRegExp**: *RegExp‹›* = /^[A-z0-9\._-]*[A-z0-9_-]$/

*Defined in [model/About.ts:35](https://github.com/gpicron/ssb-subjective-group/blob/ffd218b/src/model/About.ts#L35)*

Rule for names in about message schema as suggested in Scuttlebot documentation.
