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

*Defined in [src/index.ts:33](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/index.ts#L33)*

**Parameters:**

Name | Type |
------ | ------ |
`ssb` | [SSBRequiredApi](../interfaces/ssbrequiredapi.md) |

**Returns:** *[subjectiveGroup](subjectivegroup.md)*

## Methods

###  about

▸ **about**(`_id`: ids.FeedId | ids.SubjectiveIdentityId): *Promise‹[SubjectiveIdentity](subjectiveidentity.md)›*

*Implementation of [SubjectiveGroupPlugin](../interfaces/subjectivegroupplugin.md)*

*Defined in [src/index.ts:73](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/index.ts#L73)*

This procedure returns the Subjective Identity corresponding to passed id.

**Parameters:**

Name | Type |
------ | ------ |
`_id` | ids.FeedId &#124; ids.SubjectiveIdentityId |

**Returns:** *Promise‹[SubjectiveIdentity](subjectiveidentity.md)›*

___

###  createUserStream

▸ **createUserStream**(`id`: ids.FeedId | ids.SubjectiveIdentityId): *Source‹Msg›*

*Implementation of [SubjectiveGroupPlugin](../interfaces/subjectivegroupplugin.md)*

*Defined in [src/index.ts:171](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/index.ts#L171)*

Returns a joined stream of all feeds if SubjectiveIdentityId is passed else fallback to default
createUserStream

**Parameters:**

Name | Type |
------ | ------ |
`id` | ids.FeedId &#124; ids.SubjectiveIdentityId |

**Returns:** *Source‹Msg›*

___

###  isBlocking

▸ **isBlocking**(`_id`: ids.FeedId | ids.SubjectiveIdentityId): *Promise‹Record‹[FeedId](../README.md#feedid), boolean››*

*Implementation of [SubjectiveGroupPlugin](../interfaces/subjectivegroupplugin.md)*

*Defined in [src/index.ts:122](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/index.ts#L122)*

This procedure is the same as friends.isBlocking but with feed id or subjective identity as input and it
returns the list of feeds known for the corresponding subjective identity with the status

**Parameters:**

Name | Type |
------ | ------ |
`_id` | ids.FeedId &#124; ids.SubjectiveIdentityId |

**Returns:** *Promise‹Record‹[FeedId](../README.md#feedid), boolean››*

___

###  isFollowing

▸ **isFollowing**(`_id`: ids.FeedId | ids.SubjectiveIdentityId): *Promise‹Record‹[FeedId](../README.md#feedid), boolean››*

*Implementation of [SubjectiveGroupPlugin](../interfaces/subjectivegroupplugin.md)*

*Defined in [src/index.ts:107](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/index.ts#L107)*

This procedure is the same as friends.isFollowing but with feed id or subjective identity as input and it
returns the list of feeds known for the corresponding subjective identity with the status

**Parameters:**

Name | Type |
------ | ------ |
`_id` | ids.FeedId &#124; ids.SubjectiveIdentityId |

**Returns:** *Promise‹Record‹[FeedId](../README.md#feedid), boolean››*

___

###  publishSubjectiveIdentity

▸ **publishSubjectiveIdentity**(`identityKeyGenerator`: [IdentityKeysGenerator](../README.md#identitykeysgenerator), `_feedId`: [FeedId](../README.md#feedid), `name?`: about.Name, `image?`: about.ImageLink, `description?`: undefined | string): *Promise‹void›*

*Implementation of [SubjectiveGroupPlugin](../interfaces/subjectivegroupplugin.md)*

*Defined in [src/index.ts:137](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/index.ts#L137)*

Publish an 'about' message with the Subjective Identity signature and public key as commitment of ownership.

**Parameters:**

Name | Type |
------ | ------ |
`identityKeyGenerator` | [IdentityKeysGenerator](../README.md#identitykeysgenerator) |
`_feedId` | [FeedId](../README.md#feedid) |
`name?` | about.Name |
`image?` | about.ImageLink |
`description?` | undefined &#124; string |

**Returns:** *Promise‹void›*

___

###  whoami

▸ **whoami**(): *Promise‹Set‹[SubjectiveIdentity](subjectiveidentity.md)››*

*Implementation of [SubjectiveGroupPlugin](../interfaces/subjectivegroupplugin.md)*

*Defined in [src/index.ts:53](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/index.ts#L53)*

This procedure returns all the subjective identities attached to the feeds owned by the current ssb server.
(Note: currently all systems are using ssb-db which create 1 feed per server, so the returned Set will return 1
element)

There is only 1 subjective identity per feed (corresponding to the last published 'about' message on that feed).
If the last about message is not containing a subjective identity public key, the returned identity is not a subjective
identity but the feed_id.

The same subjective identity can be used on several feeds and on several devices (on laptop, on mobile, etc.)

The subjective identity unique key is the public key of an ed25519 key pair.

**Returns:** *Promise‹Set‹[SubjectiveIdentity](subjectiveidentity.md)››*
