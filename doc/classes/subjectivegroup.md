[ssb-subjective-group](../README.md) › [subjectiveGroup](subjectivegroup.md)

# Class: subjectiveGroup

subjective-group plugin
Scuttlebutt plugin that implement the concepts of subjective identity and groups

## Hierarchy

* **subjectiveGroup**

## Implements

* [SubjectiveGroupPlugin](../interfaces/subjectivegroupplugin.md)

## Index

### Constructors

* [constructor](subjectivegroup.md#constructor)

### Properties

* [indexView](subjectivegroup.md#indexview)
* [ssb](subjectivegroup.md#ssb)

### Methods

* [about](subjectivegroup.md#about)
* [createUserStream](subjectivegroup.md#createuserstream)
* [isBlocking](subjectivegroup.md#isblocking)
* [isFollowing](subjectivegroup.md#isfollowing)
* [publishSubjectiveIdentity](subjectivegroup.md#publishsubjectiveidentity)
* [whoami](subjectivegroup.md#whoami)

## Constructors

###  constructor

\+ **new subjectiveGroup**(`ssb`: [SSBRequiredApi](../interfaces/ssbrequiredapi.md)): *[subjectiveGroup](subjectivegroup.md)*

*Defined in [src/index.ts:48](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/index.ts#L48)*

**Parameters:**

Name | Type |
------ | ------ |
`ssb` | [SSBRequiredApi](../interfaces/ssbrequiredapi.md) |

**Returns:** *[subjectiveGroup](subjectivegroup.md)*

## Properties

###  indexView

• **indexView**: *[PReducedView](../interfaces/preducedview.md)‹Array‹[SubjectiveIdentity](subjectiveidentity.md)››*

*Defined in [src/index.ts:48](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/index.ts#L48)*

___

###  ssb

• **ssb**: *[SSBRequiredApi](../interfaces/ssbrequiredapi.md)*

*Defined in [src/index.ts:47](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/index.ts#L47)*

## Methods

###  about

▸ **about**(`_id`: [FeedId](../README.md#feedid) | [SubjectiveIdentityId](../README.md#subjectiveidentityid)): *Promise‹[SubjectiveIdentity](subjectiveidentity.md)›*

*Implementation of [SubjectiveGroupPlugin](../interfaces/subjectivegroupplugin.md)*

*Defined in [src/index.ts:170](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/index.ts#L170)*

This procedure returns the Subjective Identity corresponding to passed id.

**Parameters:**

Name | Type |
------ | ------ |
`_id` | [FeedId](../README.md#feedid) &#124; [SubjectiveIdentityId](../README.md#subjectiveidentityid) |

**Returns:** *Promise‹[SubjectiveIdentity](subjectiveidentity.md)›*

___

###  createUserStream

▸ **createUserStream**(`id`: [FeedId](../README.md#feedid) | [SubjectiveIdentityId](../README.md#subjectiveidentityid)): *Source‹Msg›*

*Implementation of [SubjectiveGroupPlugin](../interfaces/subjectivegroupplugin.md)*

*Defined in [src/index.ts:284](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/index.ts#L284)*

Returns a joined stream of all feeds if SubjectiveIdentityId is passed else fallback to default
createUserStream

**Parameters:**

Name | Type |
------ | ------ |
`id` | [FeedId](../README.md#feedid) &#124; [SubjectiveIdentityId](../README.md#subjectiveidentityid) |

**Returns:** *Source‹Msg›*

___

###  isBlocking

▸ **isBlocking**(`_id`: [FeedId](../README.md#feedid) | [SubjectiveIdentityId](../README.md#subjectiveidentityid)): *Promise‹Record‹[FeedId](../README.md#feedid), boolean››*

*Implementation of [SubjectiveGroupPlugin](../interfaces/subjectivegroupplugin.md)*

*Defined in [src/index.ts:216](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/index.ts#L216)*

This procedure is the same as friends.isBlocking but with feed id or subjective identity as input and it
returns the list of feeds known for the corresponding subjective identity with the status

**Parameters:**

Name | Type |
------ | ------ |
`_id` | [FeedId](../README.md#feedid) &#124; [SubjectiveIdentityId](../README.md#subjectiveidentityid) |

**Returns:** *Promise‹Record‹[FeedId](../README.md#feedid), boolean››*

___

###  isFollowing

▸ **isFollowing**(`_id`: [FeedId](../README.md#feedid) | [SubjectiveIdentityId](../README.md#subjectiveidentityid)): *Promise‹Record‹[FeedId](../README.md#feedid), boolean››*

*Implementation of [SubjectiveGroupPlugin](../interfaces/subjectivegroupplugin.md)*

*Defined in [src/index.ts:201](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/index.ts#L201)*

This procedure is the same as friends.isFollowing but with feed id or subjective identity as input and it
returns the list of feeds known for the corresponding subjective identity with the status

**Parameters:**

Name | Type |
------ | ------ |
`_id` | [FeedId](../README.md#feedid) &#124; [SubjectiveIdentityId](../README.md#subjectiveidentityid) |

**Returns:** *Promise‹Record‹[FeedId](../README.md#feedid), boolean››*

___

###  publishSubjectiveIdentity

▸ **publishSubjectiveIdentity**(`identityKey`: [KeyPair](../README.md#keypair) | [StrongPassword](../README.md#strongpassword) | [IdentityKeysProvider](../README.md#identitykeysprovider), `name?`: [Name](../README.md#name), `image?`: [ImageLink](../README.md#imagelink), `description?`: undefined | string): *Promise‹[SubjectiveIdentity](subjectiveidentity.md)›*

*Implementation of [SubjectiveGroupPlugin](../interfaces/subjectivegroupplugin.md)*

*Defined in [src/index.ts:231](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/index.ts#L231)*

Publish an 'about' message with the Subjective Identity signature and public key as commitment of ownership.

**Parameters:**

Name | Type |
------ | ------ |
`identityKey` | [KeyPair](../README.md#keypair) &#124; [StrongPassword](../README.md#strongpassword) &#124; [IdentityKeysProvider](../README.md#identitykeysprovider) |
`name?` | [Name](../README.md#name) |
`image?` | [ImageLink](../README.md#imagelink) |
`description?` | undefined &#124; string |

**Returns:** *Promise‹[SubjectiveIdentity](subjectiveidentity.md)›*

___

###  whoami

▸ **whoami**(): *Promise‹[SubjectiveIdentity](subjectiveidentity.md)›*

*Implementation of [SubjectiveGroupPlugin](../interfaces/subjectivegroupplugin.md)*

*Defined in [src/index.ts:150](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/index.ts#L150)*

This procedure returns the subjective identity attached to the feed owned by the current ssb server.

There is only 1 subjective identity per feed (corresponding to the last published 'about' message on that feed).
If the last about message is not containing a subjective identity public key, the returned identity is not a subjective
identity but the 'dummy' SubjectiveIdentity referring the feed_id.

The same subjective identity can be used on several feeds and on several devices (on laptop, on mobile, etc.)

The subjective identity unique key is the public key of an ed25519 key pair. It is prefixed by @... if it is a "dummy" one
else it is prefixed by I...

**Returns:** *Promise‹[SubjectiveIdentity](subjectiveidentity.md)›*
