[ssb-subjective-group](README.md)

# ssb-subjective-group

## Index

### Classes

* [SubjectiveIdentity](classes/subjectiveidentity.md)
* [subjectiveGroup](classes/subjectivegroup.md)

### Interfaces

* [SSBRequiredApi](interfaces/ssbrequiredapi.md)
* [SubjectiveGroupPlugin](interfaces/subjectivegroupplugin.md)

### Type aliases

* [AboutMessage](README.md#aboutmessage)
* [AboutMessageIdentitySignature](README.md#aboutmessageidentitysignature)
* [BlobId](README.md#blobid)
* [FeedId](README.md#feedid)
* [FeedWithMetainfo](README.md#feedwithmetainfo)
* [IdentityKeysGenerator](README.md#identitykeysgenerator)
* [ImageLink](README.md#imagelink)
* [KeyPair](README.md#keypair)
* [MimeType](README.md#mimetype)
* [Name](README.md#name)
* [PositiveInteger](README.md#positiveinteger)
* [SubjectiveGroupAboutMessage](README.md#subjectivegroupaboutmessage)
* [SubjectiveIdentityId](README.md#subjectiveidentityid)
* [Version](README.md#version)

### Variables

* [BlobIdCodec](README.md#const-blobidcodec)
* [BufferCodec](README.md#const-buffercodec)
* [Ed25519KeyInB64Codec](README.md#const-ed25519keyinb64codec)
* [FeedIdCodec](README.md#const-feedidcodec)
* [FullImageLinkCodec](README.md#const-fullimagelinkcodec)
* [ImageLinkCodec](README.md#const-imagelinkcodec)
* [KeyPairCodec](README.md#const-keypaircodec)
* [MimeTypeCodec](README.md#const-mimetypecodec)
* [NameCodec](README.md#const-namecodec)
* [PositiveIntegerCodec](README.md#const-positiveintegercodec)
* [SubjectiveIdentityIdCodec](README.md#const-subjectiveidentityidcodec)
* [VersionCodec](README.md#const-versioncodec)
* [aboutNameRegExp](README.md#const-aboutnameregexp)
* [isCanonicalBase64](README.md#iscanonicalbase64)
* [packageJson](README.md#packagejson)
* [semverRegex](README.md#semverregex)
* [ssbKeys](README.md#ssbkeys)
* [ssbRef](README.md#ssbref)
* [subjectiveIdentityIdRegExp](README.md#const-subjectiveidentityidregexp)

### Functions

* [PasswordBasedIdentityKeysGenerator](README.md#passwordbasedidentitykeysgenerator)
* [getPackageVersion](README.md#getpackageversion)

## Type aliases

###  AboutMessage

Ƭ **AboutMessage**: *object*

*Defined in [src/model/About.ts:10](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/model/About.ts#L10)*

#### Type declaration:

* **about**: *[FeedId](README.md#feedid)*

* **description**? : *undefined | string*

* **image**? : *[ImageLink](README.md#imagelink)*

* **name**? : *[Name](README.md#name)*

___

###  AboutMessageIdentitySignature

Ƭ **AboutMessageIdentitySignature**: *string*

*Defined in [src/model/About.ts:26](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/model/About.ts#L26)*

___

###  BlobId

Ƭ **BlobId**: *t.OutputOf‹typeof BlobIdCodec› & ssbTs.BlobId*

*Defined in [src/model/Ids.ts:81](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/model/Ids.ts#L81)*

Identifier of a blob ref.  This is a public key prefixed by the letter '&'.

___

###  FeedId

Ƭ **FeedId**: *t.OutputOf‹typeof FeedIdCodec› & ssbTs.FeedId*

*Defined in [src/model/Ids.ts:60](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/model/Ids.ts#L60)*

Identifier of a feed.  This is a public key prefixed by the letter '@'.

___

###  FeedWithMetainfo

Ƭ **FeedWithMetainfo**: *object*

*Defined in [src/model/SubjectiveIdentity.ts:6](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/model/SubjectiveIdentity.ts#L6)*

#### Type declaration:

* **description**: *string*

* **id**: *[FeedId](README.md#feedid)*

___

###  IdentityKeysGenerator

Ƭ **IdentityKeysGenerator**: *function*

*Defined in [src/model/IdentityKeysGenerator.ts:32](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/model/IdentityKeysGenerator.ts#L32)*

#### Type declaration:

▸ (): *[KeyPair](README.md#keypair)*

___

###  ImageLink

Ƭ **ImageLink**: *t.OutputOf‹typeof ImageLinkCodec›*

*Defined in [src/model/About.ts:81](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/model/About.ts#L81)*

"image" reference attributes (see 'about' messages)

___

###  KeyPair

Ƭ **KeyPair**: *t.TypeOf‹typeof KeyPairCodec›*

*Defined in [src/model/IdentityKeysGenerator.ts:30](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/model/IdentityKeysGenerator.ts#L30)*

___

###  MimeType

Ƭ **MimeType**: *t.OutputOf‹typeof MimeTypeCodec›*

Defined in src/model/base.ts:65

MimeType string as defined by RFC 2045 Section 5.1 and RFC 7231 Section 3.1.1.1.

___

###  Name

Ƭ **Name**: *t.OutputOf‹typeof NameCodec›*

*Defined in [src/model/About.ts:54](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/model/About.ts#L54)*

Identifier of a feed.  This is a public key prefixed by the letter 'I'.

___

###  PositiveInteger

Ƭ **PositiveInteger**: *t.OutputOf‹typeof PositiveIntegerCodec›*

Defined in src/model/base.ts:25

PositiveInteger ( > 0 and < safe integer number in javascript).

___

###  SubjectiveGroupAboutMessage

Ƭ **SubjectiveGroupAboutMessage**: *[AboutMessage](README.md#aboutmessage) & object*

*Defined in [src/model/About.ts:20](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/model/About.ts#L20)*

The base about message is signed with the subjectiveId key pair

___

###  SubjectiveIdentityId

Ƭ **SubjectiveIdentityId**: *t.OutputOf‹typeof SubjectiveIdentityIdCodec›*

*Defined in [src/model/Ids.ts:37](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/model/Ids.ts#L37)*

Identifier of a subjective identity.  This is a public key prefixed by the letter 'I'.

___

###  Version

Ƭ **Version**: *t.OutputOf‹typeof VersionCodec›*

Defined in src/model/base.ts:82

## Variables

### `Const` BlobIdCodec

• **BlobIdCodec**: *BrandC‹StringC‹›, BlobIdBrand›* = t.brand(
    t.string,
    (s: string): s is t.Branded<string, BlobIdBrand> => ssbRef.isBlobId(s),
    'BlobId'
)

*Defined in [src/model/Ids.ts:72](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/model/Ids.ts#L72)*

IO-TS Codec for BlobId

___

### `Const` BufferCodec

• **BufferCodec**: *BrandC‹UnknownC‹›, BufferBrand›* = t.brand(
    t.unknown,
    (n: unknown): n is t.Branded<unknown, BufferBrand> => Buffer.isBuffer(n),
    'Buffer'
)

Defined in src/model/base.ts:37

IO-TS Codec for Buffer objects.

___

### `Const` Ed25519KeyInB64Codec

• **Ed25519KeyInB64Codec**: *BrandC‹StringC‹›, Ed25519KeyInB64Brand›* = t.brand(
    t.string,
    (s: string): s is t.Branded<string, Ed25519KeyInB64Brand> =>
        keyRegExp.test(s),
    'Ed25519KeyInB64'
)

*Defined in [src/model/IdentityKeysGenerator.ts:15](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/model/IdentityKeysGenerator.ts#L15)*

___

### `Const` FeedIdCodec

• **FeedIdCodec**: *BrandC‹StringC‹›, FeedIdBrand›* = t.brand(
    t.string,
    (s: string): s is t.Branded<string, FeedIdBrand> => ssbRef.isFeedId(s),
    'FeedId'
)

*Defined in [src/model/Ids.ts:51](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/model/Ids.ts#L51)*

IO-TS Codec for FeedId

___

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

*Defined in [src/model/About.ts:61](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/model/About.ts#L61)*

IO-TS Codec "image" reference with attributes (see 'about' messages)

___

### `Const` ImageLinkCodec

• **ImageLinkCodec**: *UnionC‹[IntersectionC‹[TypeC‹object›, PartialC‹object›]›, BrandC‹StringC‹›, BlobIdBrand›]›* = t.union([FullImageLinkCodec, BlobIdCodec])

*Defined in [src/model/About.ts:76](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/model/About.ts#L76)*

IO-TS Codec "image" reference with attributes or just the blobId (see 'about' messages)

___

### `Const` KeyPairCodec

• **KeyPairCodec**: *ExactC‹TypeC‹object››* = t.strict({
    curve: t.literal('ed25519'),
    pub: Ed25519KeyInB64Codec,
    private: Ed25519KeyInB64Codec
})

*Defined in [src/model/IdentityKeysGenerator.ts:24](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/model/IdentityKeysGenerator.ts#L24)*

___

### `Const` MimeTypeCodec

• **MimeTypeCodec**: *BrandC‹StringC‹›, MimeTypeBrand›* = t.brand(
    t.string,
    (s: string): s is t.Branded<string, MimeTypeBrand> =>
        vmt.isValidMimeType(s),
    'MimeType'
)

Defined in src/model/base.ts:55

IO-TS Codec for MimeType as defined by RFC 2045 Section 5.1 and RFC 7231 Section 3.1.1.1

___

### `Const` NameCodec

• **NameCodec**: *BrandC‹StringC‹›, NameBrand›* = t.brand(
    t.string,
    (s: string): s is t.Branded<string, NameBrand> => aboutNameRegExp.test(s),
    'AboutName'
)

*Defined in [src/model/About.ts:45](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/model/About.ts#L45)*

IO-TS Codec for FeedId

___

### `Const` PositiveIntegerCodec

• **PositiveIntegerCodec**: *BrandC‹NumberC‹›, PositiveIntegerBrand›* = t.brand(
    t.number,
    (n: number): n is t.Branded<number, PositiveIntegerBrand> =>
        n > 0 && n < Number.MAX_SAFE_INTEGER,
    'PositiveInteger'
)

Defined in src/model/base.ts:15

IO-TS Codec for PositiveInteger ( > 0 and < safe integer number in javascript).

___

### `Const` SubjectiveIdentityIdCodec

• **SubjectiveIdentityIdCodec**: *BrandC‹StringC‹›, SubjectiveIdentityIdBrand›* = t.brand(
    t.string,
    (s: string): s is t.Branded<string, SubjectiveIdentityIdBrand> =>
        subjectiveIdentityIdRegExp.test(s),
    'SubjectiveIdentityId'
)

*Defined in [src/model/Ids.ts:27](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/model/Ids.ts#L27)*

IO-TS Codec for SubjectiveIdentityId

___

### `Const` VersionCodec

• **VersionCodec**: *BrandC‹StringC‹›, VersionBrand›* = t.brand(
    t.string,
    (s): s is t.Branded<string, VersionBrand> => semverRegex().test(s),
    'Version'
)

Defined in src/model/base.ts:76

___

### `Const` aboutNameRegExp

• **aboutNameRegExp**: *RegExp‹›* = /^[A-z0-9\._-]*[A-z0-9_-]$/

*Defined in [src/model/About.ts:35](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/model/About.ts#L35)*

Rule for names in about message schema as suggested in Scuttlebot documentation.

___

###  isCanonicalBase64

• **isCanonicalBase64**: *any*

*Defined in [src/model/Ids.ts:3](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/model/Ids.ts#L3)*

*Defined in [src/model/IdentityKeysGenerator.ts:3](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/model/IdentityKeysGenerator.ts#L3)*

___

###  packageJson

• **packageJson**: *object*

Defined in src/model/base.ts:84

#### Type declaration:

* **author**: *string* = "Geoffrey Picron <geoffrey.picron@arboratum.com> (https://github.com/gpicron)"

* **description**: *string* = "Scuttlebutt plugin that implement the concepts of subjective identity and groups"

* **files**: *string[]* = [
    "dist/src/"
  ]

* **homepage**: *string* = "https://github.com/gpicron/ssb-subjective-group"

* **keywords**: *string[]* = [
    "scuttlebutt"
  ]

* **license**: *string* = "SEE LICENSE IN <LICENSE>"

* **main**: *string* = "dist/src/index.js"

* **name**: *string* = "@gpicron/ssb-subjective-group"

* **pre-commit**: *string* = "lint-staged"

* **private**: *boolean* = true

* **types**: *string* = "dist/src/ssb-subjective-group-types.d.ts"

* **version**: *string* = "0.0.1"

* ### **ava**: *object*

  * **extensions**: *string[]* = [
      "ts"
    ]

  * **files**: *string[]* = [
      "!dist/**/*.d.ts",
      "test/**/test-*.ts"
    ]

  * **require**: *string[]* = [
      "ts-node/register"
    ]

* ### **bugs**: *object*

  * **url**: *string* = "https://github.com/gpicron/ssb-subjective-group/issues"

* ### **dependencies**: *object*

  * **flumeview-query**: *string* = "^7.2.1"

  * **fp-ts**: *string* = "^2.5.3"

  * **io-ts**: *string* = "^2.2.0"

  * **io-ts-promise**: *string* = "latest"

  * **is-canonical-base64**: *string* = "^1.1.1"

  * **npm-dts**: *string* = "^1.2.1"

  * **pull-stream**: *string* = "^3.6.14"

  * **secret-stack-decorators**: *string* = "^1.0.0"

  * **semver-regex**: *string* = "^3.1.1"

  * **ssb-keys**: *string* = "^7.2.2"

  * **ssb-typescript**: *string* = "^2.0.0"

  * **valid-mimetype**: *string* = "^1.0.0"

* ### **devDependencies**: *object*

  * **@types/node**: *string* = "^13.7.4"

  * **@types/pull-stream**: *string* = "^3.6.0"

  * **@typescript-eslint/eslint-plugin**: *string* = "^2.20.0"

  * **@typescript-eslint/parser**: *string* = "^2.20.0"

  * **ava**: *string* = "^3.4.0"

  * **ava-fast-check**: *string* = "^1.1.2"

  * **codecov**: *string* = "^3.6.5"

  * **eslint**: *string* = "^6.8.0"

  * **eslint-plugin-ava**: *string* = "^10.2.0"

  * **eslint-plugin-security**: *string* = "^1.4.0"

  * **fast-check**: *string* = "^1.22.2"

  * **lint-staged**: *string* = "^10.0.7"

  * **nyc**: *string* = "^15.0.0"

  * **pre-commit**: *string* = "^1.2.2"

  * **prettier**: *string* = "^1.19.1"

  * **rimraf**: *string* = "^3.0.2"

  * **ts-node**: *string* = "^8.6.2"

  * **typedoc**: *string* = "^0.16.11"

  * **typedoc-plugin-markdown**: *string* = "^2.2.16"

  * **typescript**: *string* = "^3.8.2"

* ### **lint-staged**: *object*

  * ***.ts**: *string[]* = [
      "eslint --fix",
      "prettier --write"
    ]

* ### **nyc**: *object*

  * **extension**: *string[]* = [
      ".ts"
    ]

  * **include**: *string[]* = [
      "src/*.ts"
    ]

  * **require**: *string[]* = [
      "ts-node/register"
    ]

* ### **repository**: *object*

  * **type**: *string* = "git"

  * **url**: *string* = "git+https://github.com/gpicron/ssb-subjective-group.git"

* ### **scripts**: *object*

  * **ava**: *string* = "ava -v"

  * **ava:fail-fast**: *string* = "ava -v --fail-fast"

  * **ava:serial**: *string* = "ava -v -s"

  * **clean**: *string* = "rimraf --no-glob dist"

  * **compile**: *string* = "tsc"

  * **coverage**: *string* = "nyc report --reporter=text-lcov > coverage.lcov && codecov"

  * **lint**: *string* = "eslint --ext ts ."

  * **lint-staged**: *string* = "lint-staged"

  * **lint:fix**: *string* = "eslint --ext ts --fix ."

  * **prepublishOnly**: *string* = "npm run clean && npm run compile"

  * **prettier:check**: *string* = "prettier --list-different src/**/*.ts"

  * **prettier:write**: *string* = "prettier --write src/**/*.ts"

  * **test**: *string* = "nyc ava"

  * **typedoc**: *string* = "typedoc  --options typedoc.json"

  * **watch:ava**: *string* = "nodemon -e 'ts json' -x 'npm run ava || true'"

  * **watch:ava:bell**: *string* = "nodemon -e 'ts json' -x 'npm run ava || echo -e \\a'"

  * **watch:ava:fail-fast**: *string* = "nodemon -e 'ts json' -x 'npm run ava:fail-fast || true'"

  * **watch:ava:fail-fast:bell**: *string* = "nodemon -e 'ts json' -x 'npm run ava:fail-fast || echo -e \\a'"

  * **watch:ava:serial**: *string* = "nodemon -e 'ts json' -x 'npm run ava:serial || true'"

  * **watch:ava:serial:bell**: *string* = "nodemon -e 'ts json' -x 'npm run ava:serial || echo -e \\a'"

  * **watch:compile**: *string* = "nodemon -e 'ts json' -x 'npm run compile || true'"

  * **watch:lint**: *string* = "nodemon -e 'ts js json' -x 'npm run lint || true'"

  * **watch:test**: *string* = "nodemon -e 'ts json' -x 'npm test || true'"

___

###  semverRegex

• **semverRegex**: *[semverRegex](README.md#semverregex)*

Defined in src/model/base.ts:69

___

###  ssbKeys

• **ssbKeys**: *any*

*Defined in [src/model/IdentityKeysGenerator.ts:2](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/model/IdentityKeysGenerator.ts#L2)*

*Defined in [src/index.ts:20](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/index.ts#L20)*

___

###  ssbRef

• **ssbRef**: *any*

*Defined in [src/model/Ids.ts:4](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/model/Ids.ts#L4)*

___

### `Const` subjectiveIdentityIdRegExp

• **subjectiveIdentityIdRegExp**: *RegExp* = isCanonicalBase64(
    'I',
    '.(?:sha256|ed25519)',
    32
)

*Defined in [src/model/Ids.ts:13](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/model/Ids.ts#L13)*

Regular expression matching Subjective Identity ID public key.  Similar to feed-id format but with 'I' as prefix.

## Functions

###  PasswordBasedIdentityKeysGenerator

▸ **PasswordBasedIdentityKeysGenerator**(`password`: string): *(Anonymous function)*

*Defined in [src/model/IdentityKeysGenerator.ts:36](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/model/IdentityKeysGenerator.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`password` | string |

**Returns:** *(Anonymous function)*

___

###  getPackageVersion

▸ **getPackageVersion**(): *[Version](README.md#version)*

Defined in src/model/base.ts:89

Returns the package version from the package.json file

**Returns:** *[Version](README.md#version)*
