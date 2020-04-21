[ssb-subjective-group](../README.md) › [SubjectiveGroupPlugin](subjectivegroupplugin.md)

# Interface: SubjectiveGroupPlugin

## Hierarchy

* **SubjectiveGroupPlugin**

## Implemented by

* [subjectiveGroup](../classes/subjectivegroup.md)

## Index

### Methods

* [about](subjectivegroupplugin.md#about)
* [createUserStream](subjectivegroupplugin.md#createuserstream)
* [isBlocking](subjectivegroupplugin.md#isblocking)
* [isFollowing](subjectivegroupplugin.md#isfollowing)
* [publishSubjectiveIdentity](subjectivegroupplugin.md#publishsubjectiveidentity)
* [whoami](subjectivegroupplugin.md#whoami)

## Methods

###  about

▸ **about**(`id`: [FeedId](../README.md#feedid) | [SubjectiveIdentityId](../README.md#subjectiveidentityid)): *Promise‹[SubjectiveIdentity](../classes/subjectiveidentity.md)›*

*Defined in [src/ssb-subjective-group-types.ts:35](https://github.com/gpicron/ssb-subjective-group/blob/d1d0c99/src/ssb-subjective-group-types.ts#L35)*

This procedure returns the Subjective Identity corresponding to passed id.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | [FeedId](../README.md#feedid) &#124; [SubjectiveIdentityId](../README.md#subjectiveidentityid) | either a feed id (@...) or a subjective identity id (I...)  |

**Returns:** *Promise‹[SubjectiveIdentity](../classes/subjectiveidentity.md)›*

___

###  createUserStream

▸ **createUserStream**(`id`: [FeedId](../README.md#feedid) | [SubjectiveIdentityId](../README.md#subjectiveidentityid)): *Source‹Msg›*

*Defined in [src/ssb-subjective-group-types.ts:81](https://github.com/gpicron/ssb-subjective-group/blob/d1d0c99/src/ssb-subjective-group-types.ts#L81)*

Returns a joined stream of all feeds if SubjectiveIdentityId is passed else fallback to default
createUserStream

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | [FeedId](../README.md#feedid) &#124; [SubjectiveIdentityId](../README.md#subjectiveidentityid) |   |

**Returns:** *Source‹Msg›*

___

###  isBlocking

▸ **isBlocking**(`id`: [FeedId](../README.md#feedid) | [SubjectiveIdentityId](../README.md#subjectiveidentityid)): *Promise‹Record‹[FeedId](../README.md#feedid), boolean››*

*Defined in [src/ssb-subjective-group-types.ts:53](https://github.com/gpicron/ssb-subjective-group/blob/d1d0c99/src/ssb-subjective-group-types.ts#L53)*

This procedure is the same as friends.isBlocking but with feed id or subjective identity as input and it
returns the list of feeds known for the corresponding subjective identity with the status

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | [FeedId](../README.md#feedid) &#124; [SubjectiveIdentityId](../README.md#subjectiveidentityid) | either a feed id (@...) or a subjective identity id (I...)  |

**Returns:** *Promise‹Record‹[FeedId](../README.md#feedid), boolean››*

___

###  isFollowing

▸ **isFollowing**(`id`: [FeedId](../README.md#feedid) | [SubjectiveIdentityId](../README.md#subjectiveidentityid)): *Promise‹Record‹[FeedId](../README.md#feedid), boolean››*

*Defined in [src/ssb-subjective-group-types.ts:43](https://github.com/gpicron/ssb-subjective-group/blob/d1d0c99/src/ssb-subjective-group-types.ts#L43)*

This procedure is the same as friends.isFollowing but with feed id or subjective identity as input and it
returns the list of feeds known for the corresponding subjective identity with the status

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | [FeedId](../README.md#feedid) &#124; [SubjectiveIdentityId](../README.md#subjectiveidentityid) | either a feed id (@...) or a subjective identity id (I...)  |

**Returns:** *Promise‹Record‹[FeedId](../README.md#feedid), boolean››*

___

###  publishSubjectiveIdentity

▸ **publishSubjectiveIdentity**(`identityKey`: [KeyPair](../README.md#keypair) | [StrongPassword](../README.md#strongpassword) | [IdentityKeysProvider](../README.md#identitykeysprovider), `_feedId`: [FeedId](../README.md#feedid), `name?`: [Name](../README.md#name), `image?`: [ImageLink](../README.md#imagelink), `description?`: undefined | string): *Promise‹void›*

*Defined in [src/ssb-subjective-group-types.ts:67](https://github.com/gpicron/ssb-subjective-group/blob/d1d0c99/src/ssb-subjective-group-types.ts#L67)*

Publish an 'about' message with the Subjective Identity signature and public key as commitment of ownership.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`identityKey` | [KeyPair](../README.md#keypair) &#124; [StrongPassword](../README.md#strongpassword) &#124; [IdentityKeysProvider](../README.md#identitykeysprovider) | - |
`_feedId` | [FeedId](../README.md#feedid) | - |
`name?` | [Name](../README.md#name) | - |
`image?` | [ImageLink](../README.md#imagelink) | - |
`description?` | undefined &#124; string |   |

**Returns:** *Promise‹void›*

___

###  whoami

▸ **whoami**(): *Promise‹Set‹[SubjectiveIdentity](../classes/subjectiveidentity.md)››*

*Defined in [src/ssb-subjective-group-types.ts:28](https://github.com/gpicron/ssb-subjective-group/blob/d1d0c99/src/ssb-subjective-group-types.ts#L28)*

This procedure returns all the subjective identities attached to the feeds owned by the current ssb server.
(Note: currently all systems are using ssb-db which create 1 feed per server, so the returned Set will return 1
element)

There is only 1 subjective identity per feed (corresponding to the last published 'about' message on that feed).
If the last about message is not containing a subjective identity public key, the returned identity is not a subjective
identity but the feed_id.

The same subjective identity can be used on several feeds and on several devices (on laptop, on mobile, etc.)

The subjective identity unique key is the public key of an ed25519 key pair.

**Returns:** *Promise‹Set‹[SubjectiveIdentity](../classes/subjectiveidentity.md)››*
