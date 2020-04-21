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

▸ **about**(`id`: ids.FeedId | ids.SubjectiveIdentityId): *Promise‹[SubjectiveIdentity](../classes/subjectiveidentity.md)›*

*Defined in [src/ssb-subjective-group-types.ts:31](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/ssb-subjective-group-types.ts#L31)*

This procedure returns the Subjective Identity corresponding to passed id.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | ids.FeedId &#124; ids.SubjectiveIdentityId | either a feed id (@...) or a subjective identity id (I...)  |

**Returns:** *Promise‹[SubjectiveIdentity](../classes/subjectiveidentity.md)›*

___

###  createUserStream

▸ **createUserStream**(`id`: ids.FeedId | ids.SubjectiveIdentityId): *Source‹Msg›*

*Defined in [src/ssb-subjective-group-types.ts:79](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/ssb-subjective-group-types.ts#L79)*

Returns a joined stream of all feeds if SubjectiveIdentityId is passed else fallback to default
createUserStream

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | ids.FeedId &#124; ids.SubjectiveIdentityId |   |

**Returns:** *Source‹Msg›*

___

###  isBlocking

▸ **isBlocking**(`id`: ids.FeedId | ids.SubjectiveIdentityId): *Promise‹Record‹[FeedId](../README.md#feedid), boolean››*

*Defined in [src/ssb-subjective-group-types.ts:51](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/ssb-subjective-group-types.ts#L51)*

This procedure is the same as friends.isBlocking but with feed id or subjective identity as input and it
returns the list of feeds known for the corresponding subjective identity with the status

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | ids.FeedId &#124; ids.SubjectiveIdentityId | either a feed id (@...) or a subjective identity id (I...)  |

**Returns:** *Promise‹Record‹[FeedId](../README.md#feedid), boolean››*

___

###  isFollowing

▸ **isFollowing**(`id`: ids.FeedId | ids.SubjectiveIdentityId): *Promise‹Record‹[FeedId](../README.md#feedid), boolean››*

*Defined in [src/ssb-subjective-group-types.ts:41](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/ssb-subjective-group-types.ts#L41)*

This procedure is the same as friends.isFollowing but with feed id or subjective identity as input and it
returns the list of feeds known for the corresponding subjective identity with the status

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`id` | ids.FeedId &#124; ids.SubjectiveIdentityId | either a feed id (@...) or a subjective identity id (I...)  |

**Returns:** *Promise‹Record‹[FeedId](../README.md#feedid), boolean››*

___

###  publishSubjectiveIdentity

▸ **publishSubjectiveIdentity**(`identityKeyGenerator`: [IdentityKeysGenerator](../README.md#identitykeysgenerator), `_feedId`: [FeedId](../README.md#feedid), `name?`: about.Name, `image?`: about.ImageLink, `description?`: undefined | string): *Promise‹void›*

*Defined in [src/ssb-subjective-group-types.ts:65](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/ssb-subjective-group-types.ts#L65)*

Publish an 'about' message with the Subjective Identity signature and public key as commitment of ownership.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`identityKeyGenerator` | [IdentityKeysGenerator](../README.md#identitykeysgenerator) | - |
`_feedId` | [FeedId](../README.md#feedid) | - |
`name?` | about.Name | - |
`image?` | about.ImageLink | - |
`description?` | undefined &#124; string |   |

**Returns:** *Promise‹void›*

___

###  whoami

▸ **whoami**(): *Promise‹Set‹[SubjectiveIdentity](../classes/subjectiveidentity.md)››*

*Defined in [src/ssb-subjective-group-types.ts:24](https://github.com/gpicron/ssb-subjective-group/blob/c033130/src/ssb-subjective-group-types.ts#L24)*

This procedure returns all the subjective identities attached to the feeds owned by the current ssb server.
(Note: currently all systems are using ssb-db which create 1 feed per server, so the returned Set will return 1
element)

There is only 1 subjective identity per feed (corresponding to the last published 'about' message on that feed).
If the last about message is not containing a subjective identity public key, the returned identity is not a subjective
identity but the feed_id.

The same subjective identity can be used on several feeds and on several devices (on laptop, on mobile, etc.)

The subjective identity unique key is the public key of an ed25519 key pair.

**Returns:** *Promise‹Set‹[SubjectiveIdentity](../classes/subjectiveidentity.md)››*
