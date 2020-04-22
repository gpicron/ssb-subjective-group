[ssb-subjective-group](README.md)

# ssb-subjective-group

## Index

### Namespaces

* [FlumeViewReduce](README.md#flumeviewreduce)

### Classes

* [SubjectiveIdentity](classes/subjectiveidentity.md)
* [subjectiveGroup](classes/subjectivegroup.md)

### Interfaces

* [AboutFeedIdMessage](interfaces/aboutfeedidmessage.md)
* [PReducedView](interfaces/preducedview.md)
* [SSBRequiredApi](interfaces/ssbrequiredapi.md)
* [SubjectiveGroupAboutMessage](interfaces/subjectivegroupaboutmessage.md)
* [SubjectiveGroupAboutMessageSigned](interfaces/subjectivegroupaboutmessagesigned.md)
* [SubjectiveGroupPlugin](interfaces/subjectivegroupplugin.md)

### Type aliases

* [AboutMessageIdentitySignature](README.md#aboutmessageidentitysignature)
* [BlobId](README.md#blobid)
* [Callback](README.md#callback)
* [FeedId](README.md#feedid)
* [FeedWithMetainfo](README.md#feedwithmetainfo)
* [IdentityKeysProvider](README.md#identitykeysprovider)
* [ImageLink](README.md#imagelink)
* [KeyPair](README.md#keypair)
* [MimeType](README.md#mimetype)
* [Name](README.md#name)
* [PositiveInteger](README.md#positiveinteger)
* [StrongPassword](README.md#strongpassword)
* [SubjectiveIdentityId](README.md#subjectiveidentityid)
* [Version](README.md#version)

### Variables

* [BlobIdCodec](README.md#const-blobidcodec)
* [Ed25519KeyInB64Codec](README.md#const-ed25519keyinb64codec)
* [FeedIdCodec](README.md#const-feedidcodec)
* [FullImageLinkCodec](README.md#const-fullimagelinkcodec)
* [ImageLinkCodec](README.md#const-imagelinkcodec)
* [KeyPairCodec](README.md#const-keypaircodec)
* [MimeTypeCodec](README.md#const-mimetypecodec)
* [NameCodec](README.md#const-namecodec)
* [PositiveIntegerCodec](README.md#const-positiveintegercodec)
* [StrongPasswordCodec](README.md#const-strongpasswordcodec)
* [SubjectiveIdentityIdCodec](README.md#const-subjectiveidentityidcodec)
* [VersionCodec](README.md#const-versioncodec)
* [aboutNameRegExp](README.md#const-aboutnameregexp)
* [chloride](README.md#chloride)
* [isCanonicalBase64](README.md#iscanonicalbase64)
* [packageJson](README.md#packagejson)
* [pify](README.md#pify)
* [semverRegex](README.md#semverregex)
* [ssbKeys](README.md#ssbkeys)
* [ssbRef](README.md#ssbref)
* [subjectiveIdentityIdRegExp](README.md#const-subjectiveidentityidregexp)

### Functions

* [FlumeViewReduce](README.md#export-assignment-flumeviewreduce)
* [PasswordBasedIdentityKeysProvider](README.md#passwordbasedidentitykeysprovider)
* [StoredIdentityKeysProvider](README.md#storedidentitykeysprovider)
* [getPackageVersion](README.md#getpackageversion)

## Namespaces

###  FlumeViewReduce

• **FlumeViewReduce**: *typeof FlumeViewReduce*

*Defined in [src/@types/flumeview-reduce.ts:12](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/@types/flumeview-reduce.ts#L12)*

*Defined in [src/@types/flumeview-reduce.ts:14](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/@types/flumeview-reduce.ts#L14)*

*Defined in [src/index.ts:33](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/index.ts#L33)*

###  ReducedView

• **ReducedView**:

*Defined in [src/@types/flumeview-reduce.ts:28](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/@types/flumeview-reduce.ts#L28)*

###  get

▸ **get**(`callback`: [Callback](README.md#callback)‹R›): *void*

*Defined in [src/@types/flumeview-reduce.ts:29](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/@types/flumeview-reduce.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [Callback](README.md#callback)‹R› |

**Returns:** *void*

###  ready

▸ **ready**(`callback`: [Callback](README.md#callback)‹void›): *void*

*Inherited from [View](README.md#view).[ready](README.md#ready)*

*Defined in [src/@types/flumeview-reduce.ts:25](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/@types/flumeview-reduce.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [Callback](README.md#callback)‹void› |

**Returns:** *void*

###  stream

▸ **stream**(): *Source‹R›*

*Defined in [src/@types/flumeview-reduce.ts:30](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/@types/flumeview-reduce.ts#L30)*

**Returns:** *Source‹R›*

###  View

• **View**:

*Defined in [src/@types/flumeview-reduce.ts:24](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/@types/flumeview-reduce.ts#L24)*

###  ready

▸ **ready**(`callback`: [Callback](README.md#callback)‹void›): *void*

*Defined in [src/@types/flumeview-reduce.ts:25](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/@types/flumeview-reduce.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [Callback](README.md#callback)‹void› |

**Returns:** *void*

###  Codec

Ƭ **Codec**: *object*

*Defined in [src/@types/flumeview-reduce.ts:18](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/@types/flumeview-reduce.ts#L18)*

#### Type declaration:

* **decode**(): *function*

  * (`output`: O): *I*

* **encode**(): *function*

  * (`input`: I): *O*

###  MapFunction

Ƭ **MapFunction**: *function*

*Defined in [src/@types/flumeview-reduce.ts:15](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/@types/flumeview-reduce.ts#L15)*

#### Type declaration:

▸ (`value`: T, `seq?`: undefined | number): *U | null*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`seq?` | undefined &#124; number |

###  ReduceFunction

Ƭ **ReduceFunction**: *function*

*Defined in [src/@types/flumeview-reduce.ts:16](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/@types/flumeview-reduce.ts#L16)*

#### Type declaration:

▸ (`state`: R, `value`: U, `seq?`: undefined | number): *R*

**Parameters:**

Name | Type |
------ | ------ |
`state` | R |
`value` | U |
`seq?` | undefined &#124; number |

## Type aliases

###  AboutMessageIdentitySignature

Ƭ **AboutMessageIdentitySignature**: *string*

*Defined in [src/model/About.ts:34](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/model/About.ts#L34)*

___

###  BlobId

Ƭ **BlobId**: *t.OutputOf‹typeof BlobIdCodec› & ssbTs.BlobId*

*Defined in [src/model/Ids.ts:81](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/model/Ids.ts#L81)*

Identifier of a blob ref.  This is a public key prefixed by the letter '&'.

___

###  Callback

Ƭ **Callback**: *function*

Defined in src/model/base.ts:7

#### Type declaration:

▸ (`err`: Error | null, `reply`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err` | Error &#124; null |
`reply` | T |

___

###  FeedId

Ƭ **FeedId**: *t.OutputOf‹typeof FeedIdCodec› & ssbTs.FeedId*

*Defined in [src/model/Ids.ts:60](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/model/Ids.ts#L60)*

Identifier of a feed.  This is a public key prefixed by the letter '@'.

___

###  FeedWithMetainfo

Ƭ **FeedWithMetainfo**: *object*

*Defined in [src/model/SubjectiveIdentity.ts:11](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/model/SubjectiveIdentity.ts#L11)*

#### Type declaration:

* **description**: *string*

* **id**: *[FeedId](README.md#feedid)*

___

###  IdentityKeysProvider

Ƭ **IdentityKeysProvider**: *function*

*Defined in [src/model/IdentityKeysGenerator.ts:38](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/model/IdentityKeysGenerator.ts#L38)*

Function signature of functions that provides the Subjective Identity KeyPair on demand.

#### Type declaration:

▸ (): *Promise‹[KeyPair](README.md#keypair)›*

___

###  ImageLink

Ƭ **ImageLink**: *t.OutputOf‹typeof ImageLinkCodec›*

*Defined in [src/model/About.ts:89](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/model/About.ts#L89)*

"image" reference attributes (see 'about' messages)

___

###  KeyPair

Ƭ **KeyPair**: *t.TypeOf‹typeof KeyPairCodec›*

*Defined in [src/model/IdentityKeysGenerator.ts:33](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/model/IdentityKeysGenerator.ts#L33)*

___

###  MimeType

Ƭ **MimeType**: *t.OutputOf‹typeof MimeTypeCodec›*

Defined in src/model/base.ts:51

MimeType string as defined by RFC 2045 Section 5.1 and RFC 7231 Section 3.1.1.1.

___

###  Name

Ƭ **Name**: *t.OutputOf‹typeof NameCodec›*

*Defined in [src/model/About.ts:62](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/model/About.ts#L62)*

Identifier of a feed.  This is a public key prefixed by the letter 'I'.

___

###  PositiveInteger

Ƭ **PositiveInteger**: *t.OutputOf‹typeof PositiveIntegerCodec›*

Defined in src/model/base.ts:27

PositiveInteger ( > 0 and < safe integer number in javascript).

___

###  StrongPassword

Ƭ **StrongPassword**: *t.TypeOf‹typeof StrongPasswordCodec›*

*Defined in [src/model/IdentityKeysGenerator.ts:56](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/model/IdentityKeysGenerator.ts#L56)*

___

###  SubjectiveIdentityId

Ƭ **SubjectiveIdentityId**: *t.OutputOf‹typeof SubjectiveIdentityIdCodec›*

*Defined in [src/model/Ids.ts:37](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/model/Ids.ts#L37)*

Identifier of a subjective identity.  This is a public key prefixed by the letter 'I'.

___

###  Version

Ƭ **Version**: *t.OutputOf‹typeof VersionCodec›*

Defined in src/model/base.ts:68

## Variables

### `Const` BlobIdCodec

• **BlobIdCodec**: *BrandC‹StringC‹›, BlobIdBrand›* = t.brand(
    t.string,
    (s: string): s is t.Branded<string, BlobIdBrand> => ssbRef.isBlobId(s),
    'BlobId'
)

*Defined in [src/model/Ids.ts:72](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/model/Ids.ts#L72)*

IO-TS Codec for BlobId

___

### `Const` Ed25519KeyInB64Codec

• **Ed25519KeyInB64Codec**: *BrandC‹StringC‹›, Ed25519KeyInB64Brand›* = t.brand(
    t.string,
    (s: string): s is t.Branded<string, Ed25519KeyInB64Brand> =>
        keyRegExp.test(s),
    'Ed25519KeyInB64'
)

*Defined in [src/model/IdentityKeysGenerator.ts:18](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/model/IdentityKeysGenerator.ts#L18)*

___

### `Const` FeedIdCodec

• **FeedIdCodec**: *BrandC‹StringC‹›, FeedIdBrand›* = t.brand(
    t.string,
    (s: string): s is t.Branded<string, FeedIdBrand> => ssbRef.isFeedId(s),
    'FeedId'
)

*Defined in [src/model/Ids.ts:51](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/model/Ids.ts#L51)*

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

*Defined in [src/model/About.ts:69](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/model/About.ts#L69)*

IO-TS Codec "image" reference with attributes (see 'about' messages)

___

### `Const` ImageLinkCodec

• **ImageLinkCodec**: *UnionC‹[IntersectionC‹[TypeC‹object›, PartialC‹object›]›, BrandC‹StringC‹›, BlobIdBrand›]›* = t.union([FullImageLinkCodec, BlobIdCodec])

*Defined in [src/model/About.ts:84](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/model/About.ts#L84)*

IO-TS Codec "image" reference with attributes or just the blobId (see 'about' messages)

___

### `Const` KeyPairCodec

• **KeyPairCodec**: *ExactC‹TypeC‹object››* = t.strict({
    curve: t.literal('ed25519'),
    public: Ed25519KeyInB64Codec,
    private: Ed25519KeyInB64Codec
})

*Defined in [src/model/IdentityKeysGenerator.ts:27](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/model/IdentityKeysGenerator.ts#L27)*

___

### `Const` MimeTypeCodec

• **MimeTypeCodec**: *BrandC‹StringC‹›, MimeTypeBrand›* = t.brand(
    t.string,
    (s: string): s is t.Branded<string, MimeTypeBrand> =>
        vmt.isValidMimeType(s),
    'MimeType'
)

Defined in src/model/base.ts:41

IO-TS Codec for MimeType as defined by RFC 2045 Section 5.1 and RFC 7231 Section 3.1.1.1

___

### `Const` NameCodec

• **NameCodec**: *BrandC‹StringC‹›, NameBrand›* = t.brand(
    t.string,
    (s: string): s is t.Branded<string, NameBrand> => aboutNameRegExp.test(s),
    'AboutName'
)

*Defined in [src/model/About.ts:53](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/model/About.ts#L53)*

IO-TS Codec for FeedId

___

### `Const` PositiveIntegerCodec

• **PositiveIntegerCodec**: *BrandC‹NumberC‹›, PositiveIntegerBrand›* = t.brand(
    t.number,
    (n: number): n is t.Branded<number, PositiveIntegerBrand> =>
        n > 0 && n < Number.MAX_SAFE_INTEGER,
    'PositiveInteger'
)

Defined in src/model/base.ts:17

IO-TS Codec for PositiveInteger ( > 0 and < safe integer number in javascript).

___

### `Const` StrongPasswordCodec

• **StrongPasswordCodec**: *BrandC‹StringC‹›, StrongPasswordBrand›* = t.brand(
    t.string,
    (s: string): s is t.Branded<string, StrongPasswordBrand> =>
        passwordTester.test(s).strong,
    'StrongPassword'
)

*Defined in [src/model/IdentityKeysGenerator.ts:49](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/model/IdentityKeysGenerator.ts#L49)*

___

### `Const` SubjectiveIdentityIdCodec

• **SubjectiveIdentityIdCodec**: *BrandC‹StringC‹›, SubjectiveIdentityIdBrand›* = t.brand(
    t.string,
    (s: string): s is t.Branded<string, SubjectiveIdentityIdBrand> =>
        subjectiveIdentityIdRegExp.test(s),
    'SubjectiveIdentityId'
)

*Defined in [src/model/Ids.ts:27](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/model/Ids.ts#L27)*

IO-TS Codec for SubjectiveIdentityId

___

### `Const` VersionCodec

• **VersionCodec**: *BrandC‹StringC‹›, VersionBrand›* = t.brand(
    t.string,
    (s): s is t.Branded<string, VersionBrand> => semverRegex().test(s),
    'Version'
)

Defined in src/model/base.ts:62

___

### `Const` aboutNameRegExp

• **aboutNameRegExp**: *RegExp‹›* = /^[A-z0-9._-]*[A-z0-9_-]$/

*Defined in [src/model/About.ts:43](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/model/About.ts#L43)*

Rule for names in about message schema as suggested in Scuttlebot documentation.

___

###  chloride

• **chloride**: *any*

*Defined in [src/model/IdentityKeysGenerator.ts:4](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/model/IdentityKeysGenerator.ts#L4)*

___

###  isCanonicalBase64

• **isCanonicalBase64**: *any*

*Defined in [src/model/Ids.ts:3](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/model/Ids.ts#L3)*

*Defined in [src/model/IdentityKeysGenerator.ts:6](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/model/IdentityKeysGenerator.ts#L6)*

___

###  packageJson

• **packageJson**: *object*

Defined in src/model/base.ts:70

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

  * **flumeview-reduce**: *string* = "^1.3.16"

  * **fp-ts**: *string* = "^2.5.3"

  * **io-ts**: *string* = "^2.2.0"

  * **io-ts-promise**: *string* = "latest"

  * **is-canonical-base64**: *string* = "^1.1.1"

  * **npm-dts**: *string* = "^1.2.1"

  * **owasp-password-strength-test**: *string* = "^1.3.0"

  * **pify**: *string* = "^5.0.0"

  * **pull-stream**: *string* = "^3.6.14"

  * **secret-stack-decorators**: *string* = "^1.1.0"

  * **semver-regex**: *string* = "^3.1.1"

  * **ssb-keys**: *string* = "^7.2.2"

  * **ssb-typescript**: *string* = "^2.0.0"

  * **valid-mimetype**: *string* = "^1.0.0"

* ### **devDependencies**: *object*

  * **@types/node**: *string* = "^13.7.4"

  * **@types/owasp-password-strength-test**: *string* = "^1.3.0"

  * **@types/pify**: *string* = "^3.0.2"

  * **@types/pull-stream**: *string* = "^3.6.0"

  * **@types/rimraf**: *string* = "^3.0.0"

  * **@typescript-eslint/eslint-plugin**: *string* = "^2.20.0"

  * **@typescript-eslint/parser**: *string* = "^2.20.0"

  * **ava**: *string* = "^3.4.0"

  * **ava-fast-check**: *string* = "^1.1.2"

  * **codecov**: *string* = "^3.6.5"

  * **eslint**: *string* = "^6.8.0"

  * **eslint-plugin-ava**: *string* = "^10.2.0"

  * **eslint-plugin-security**: *string* = "^1.4.0"

  * **fast-check**: *string* = "^1.22.2"

  * **get-port**: *string* = "^5.1.1"

  * **lint-staged**: *string* = "^10.0.7"

  * **nyc**: *string* = "^15.0.0"

  * **pre-commit**: *string* = "^1.2.2"

  * **prettier**: *string* = "^1.19.1"

  * **rimraf**: *string* = "^3.0.2"

  * **secret-stack**: *string* = "^6.3.1"

  * **ssb-backlinks**: *string* = "^1.0.0"

  * **ssb-config**: *string* = "^3.4.4"

  * **ssb-db**: *string* = "^19.4.0"

  * **ts-node**: *string* = "^8.6.2"

  * **typedoc**: *string* = "^0.17.3"

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

###  pify

• **pify**: *[pify](README.md#pify)*

*Defined in [src/index.ts:31](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/index.ts#L31)*

___

###  semverRegex

• **semverRegex**: *[semverRegex](README.md#semverregex)*

Defined in src/model/base.ts:55

___

###  ssbKeys

• **ssbKeys**: *any*

*Defined in [src/model/IdentityKeysGenerator.ts:3](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/model/IdentityKeysGenerator.ts#L3)*

*Defined in [src/index.ts:30](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/index.ts#L30)*

___

###  ssbRef

• **ssbRef**: *any*

*Defined in [src/model/Ids.ts:4](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/model/Ids.ts#L4)*

___

### `Const` subjectiveIdentityIdRegExp

• **subjectiveIdentityIdRegExp**: *RegExp* = isCanonicalBase64(
    'I',
    '.(?:sha256|ed25519)',
    32
)

*Defined in [src/model/Ids.ts:13](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/model/Ids.ts#L13)*

Regular expression matching Subjective Identity ID public key.  Similar to feed-id format but with 'I' as prefix.

## Functions

### `Export assignment` FlumeViewReduce

▸ **FlumeViewReduce**<**T**, **U**, **R**, **S**>(`version`: number, `reduce`: [ReduceFunction](README.md#reducefunction)‹U, R›, `map?`: [MapFunction](README.md#mapfunction)‹T, U›, `codec?`: [Codec](README.md#codec)‹R, S›, `initialState?`: R): *Function*

*Defined in [src/@types/flumeview-reduce.ts:4](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/@types/flumeview-reduce.ts#L4)*

**Type parameters:**

▪ **T**

▪ **U**

▪ **R**

▪ **S**

**Parameters:**

Name | Type |
------ | ------ |
`version` | number |
`reduce` | [ReduceFunction](README.md#reducefunction)‹U, R› |
`map?` | [MapFunction](README.md#mapfunction)‹T, U› |
`codec?` | [Codec](README.md#codec)‹R, S› |
`initialState?` | R |

**Returns:** *Function*

___

###  PasswordBasedIdentityKeysProvider

▸ **PasswordBasedIdentityKeysProvider**(`password`: [StrongPassword](README.md#strongpassword)): *[IdentityKeysProvider](README.md#identitykeysprovider)*

*Defined in [src/model/IdentityKeysGenerator.ts:66](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/model/IdentityKeysGenerator.ts#L66)*

This implementation of IdentityKeysGenerator take a password as seed for the key pair generation

**Parameters:**

Name | Type |
------ | ------ |
`password` | [StrongPassword](README.md#strongpassword) |

**Returns:** *[IdentityKeysProvider](README.md#identitykeysprovider)*

___

###  StoredIdentityKeysProvider

▸ **StoredIdentityKeysProvider**(`keys`: [KeyPair](README.md#keypair)): *[IdentityKeysProvider](README.md#identitykeysprovider)*

*Defined in [src/model/IdentityKeysGenerator.ts:84](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/model/IdentityKeysGenerator.ts#L84)*

This implementation of IdentityKeysGenerator return the provided key pair (for instance stored locally)

**Parameters:**

Name | Type |
------ | ------ |
`keys` | [KeyPair](README.md#keypair) |

**Returns:** *[IdentityKeysProvider](README.md#identitykeysprovider)*

___

###  getPackageVersion

▸ **getPackageVersion**(): *[Version](README.md#version)*

Defined in src/model/base.ts:75

Returns the package version from the package.json file

**Returns:** *[Version](README.md#version)*
