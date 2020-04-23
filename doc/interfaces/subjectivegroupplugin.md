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

*Defined in [ssb-subjective-group/src/ssb-subjective-group-types.ts:44](https://github.com/gpicron/ssb-subjective-group/blob/8054028/src/ssb-subjective-group-types.ts#L44)*

This procedure returns the Subjective Identity corresponding to passed id.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | [FeedId](../README.md#feedid) &#124; [SubjectiveIdentityId](../README.md#subjectiveidentityid) | either a feed id (@...) or a subjective identity id (I...)  |

**Returns:** *Promise‹[SubjectiveIdentity](../classes/subjectiveidentity.md)›*

___

###  createUserStream

▸ **createUserStream**(`id`: [FeedId](../README.md#feedid) | [SubjectiveIdentityId](../README.md#subjectiveidentityid)): *Source‹[Msg](../README.md#msg)›*

*Defined in [ssb-subjective-group/src/ssb-subjective-group-types.ts:89](https://github.com/gpicron/ssb-subjective-group/blob/8054028/src/ssb-subjective-group-types.ts#L89)*

Returns a joined stream of all feeds if SubjectiveIdentityId is passed else fallback to default
createUserStream

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | [FeedId](../README.md#feedid) &#124; [SubjectiveIdentityId](../README.md#subjectiveidentityid) |   |

**Returns:** *Source‹[Msg](../README.md#msg)›*

___

###  isBlocking

▸ **isBlocking**(`id`: [FeedId](../README.md#feedid) | [SubjectiveIdentityId](../README.md#subjectiveidentityid)): *Promise‹Record‹[FeedId](../README.md#feedid), boolean››*

*Defined in [ssb-subjective-group/src/ssb-subjective-group-types.ts:62](https://github.com/gpicron/ssb-subjective-group/blob/8054028/src/ssb-subjective-group-types.ts#L62)*

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

*Defined in [ssb-subjective-group/src/ssb-subjective-group-types.ts:52](https://github.com/gpicron/ssb-subjective-group/blob/8054028/src/ssb-subjective-group-types.ts#L52)*

This procedure is the same as friends.isFollowing but with feed id or subjective identity as input and it
returns the list of feeds known for the corresponding subjective identity with the status

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | [FeedId](../README.md#feedid) &#124; [SubjectiveIdentityId](../README.md#subjectiveidentityid) | either a feed id (@...) or a subjective identity id (I...)  |

**Returns:** *Promise‹Record‹[FeedId](../README.md#feedid), boolean››*

___

###  publishSubjectiveIdentity

▸ **publishSubjectiveIdentity**(`identityKey`: [KeyPair](../README.md#keypair) | [StrongPassword](../README.md#strongpassword) | [IdentityKeysProvider](../README.md#identitykeysprovider), `name?`: [Name](../README.md#name), `image?`: [ImageLink](../README.md#imagelink), `description?`: undefined | string): *Promise‹[SubjectiveIdentity](../classes/subjectiveidentity.md)›*

*Defined in [ssb-subjective-group/src/ssb-subjective-group-types.ts:76](https://github.com/gpicron/ssb-subjective-group/blob/8054028/src/ssb-subjective-group-types.ts#L76)*

Publish an 'about' message with the Subjective Identity signature and public key as commitment of ownership.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`identityKey` | [KeyPair](../README.md#keypair) &#124; [StrongPassword](../README.md#strongpassword) &#124; [IdentityKeysProvider](../README.md#identitykeysprovider) | - |
`name?` | [Name](../README.md#name) | - |
`image?` | [ImageLink](../README.md#imagelink) | - |
`description?` | undefined &#124; string |   |

**Returns:** *Promise‹[SubjectiveIdentity](../classes/subjectiveidentity.md)›*

___

###  whoami

▸ **whoami**(): *Promise‹[SubjectiveIdentity](../classes/subjectiveidentity.md)›*

*Defined in [ssb-subjective-group/src/ssb-subjective-group-types.ts:37](https://github.com/gpicron/ssb-subjective-group/blob/8054028/src/ssb-subjective-group-types.ts#L37)*

This procedure returns the subjective identity attached to the feed owned by the current ssb server.

There is only 1 subjective identity per feed (corresponding to the last published 'about' message on that feed).
If the last about message is not containing a subjective identity public key, the returned identity is not a subjective
identity but the 'dummy' SubjectiveIdentity referring the feed_id.

The same subjective identity can be used on several feeds and on several devices (on laptop, on mobile, etc.)

The subjective identity unique key is the public key of an ed25519 key pair. It is prefixed by @... if it is a "dummy" one
else it is prefixed by I...

**Returns:** *Promise‹[SubjectiveIdentity](../classes/subjectiveidentity.md)›*
