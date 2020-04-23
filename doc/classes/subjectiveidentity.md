[ssb-subjective-group](../README.md) › [SubjectiveIdentity](subjectiveidentity.md)

# Class: SubjectiveIdentity

## Hierarchy

* **SubjectiveIdentity**

## Index

### Constructors

* [constructor](subjectiveidentity.md#constructor)

### Properties

* [description](subjectiveidentity.md#optional-description)
* [feeds](subjectiveidentity.md#feeds)
* [id](subjectiveidentity.md#id)
* [image](subjectiveidentity.md#optional-image)
* [name](subjectiveidentity.md#optional-name)

### Accessors

* [allIds](subjectiveidentity.md#allids)
* [feedIds](subjectiveidentity.md#feedids)

### Methods

* [updateWith](subjectiveidentity.md#updatewith)
* [from](subjectiveidentity.md#static-from)

## Constructors

###  constructor

\+ **new SubjectiveIdentity**(`id`: [SubjectiveIdentityId](../README.md#subjectiveidentityid) | [FeedId](../README.md#feedid), `feeds`: ArrayLike‹[FeedId](../README.md#feedid) | [FeedWithMetainfo](../README.md#feedwithmetainfo)›, `name?`: about.Name, `image?`: about.ImageLink, `description?`: undefined | string): *[SubjectiveIdentity](subjectiveidentity.md)*

*Defined in [ssb-subjective-group/src/model/SubjectiveIdentity.ts:22](https://github.com/gpicron/ssb-subjective-group/blob/8054028/src/model/SubjectiveIdentity.ts#L22)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [SubjectiveIdentityId](../README.md#subjectiveidentityid) &#124; [FeedId](../README.md#feedid) |
`feeds` | ArrayLike‹[FeedId](../README.md#feedid) &#124; [FeedWithMetainfo](../README.md#feedwithmetainfo)› |
`name?` | about.Name |
`image?` | about.ImageLink |
`description?` | undefined &#124; string |

**Returns:** *[SubjectiveIdentity](subjectiveidentity.md)*

## Properties

### `Optional` description

• **description**? : *undefined | string*

*Defined in [ssb-subjective-group/src/model/SubjectiveIdentity.ts:22](https://github.com/gpicron/ssb-subjective-group/blob/8054028/src/model/SubjectiveIdentity.ts#L22)*

___

###  feeds

• **feeds**: *Array‹[FeedId](../README.md#feedid) | [FeedWithMetainfo](../README.md#feedwithmetainfo)›*

*Defined in [ssb-subjective-group/src/model/SubjectiveIdentity.ts:18](https://github.com/gpicron/ssb-subjective-group/blob/8054028/src/model/SubjectiveIdentity.ts#L18)*

___

###  id

• **id**: *[SubjectiveIdentityId](../README.md#subjectiveidentityid) | [FeedId](../README.md#feedid)*

*Defined in [ssb-subjective-group/src/model/SubjectiveIdentity.ts:17](https://github.com/gpicron/ssb-subjective-group/blob/8054028/src/model/SubjectiveIdentity.ts#L17)*

___

### `Optional` image

• **image**? : *about.ImageLink*

*Defined in [ssb-subjective-group/src/model/SubjectiveIdentity.ts:21](https://github.com/gpicron/ssb-subjective-group/blob/8054028/src/model/SubjectiveIdentity.ts#L21)*

___

### `Optional` name

• **name**? : *about.Name*

*Defined in [ssb-subjective-group/src/model/SubjectiveIdentity.ts:20](https://github.com/gpicron/ssb-subjective-group/blob/8054028/src/model/SubjectiveIdentity.ts#L20)*

## Accessors

###  allIds

• **get allIds**(): *ReadonlyArray‹[SubjectiveIdentityId](../README.md#subjectiveidentityid) | [FeedId](../README.md#feedid)›*

*Defined in [ssb-subjective-group/src/model/SubjectiveIdentity.ts:68](https://github.com/gpicron/ssb-subjective-group/blob/8054028/src/model/SubjectiveIdentity.ts#L68)*

This attribute contains the list of all feed ids + the subjective id.  This is useful to perform 'in' query criteria on
ssb-backlinks and ssb-query.

**Returns:** *ReadonlyArray‹[SubjectiveIdentityId](../README.md#subjectiveidentityid) | [FeedId](../README.md#feedid)›*

___

###  feedIds

• **get feedIds**(): *ReadonlyArray‹[FeedId](../README.md#feedid)›*

*Defined in [ssb-subjective-group/src/model/SubjectiveIdentity.ts:73](https://github.com/gpicron/ssb-subjective-group/blob/8054028/src/model/SubjectiveIdentity.ts#L73)*

**Returns:** *ReadonlyArray‹[FeedId](../README.md#feedid)›*

## Methods

###  updateWith

▸ **updateWith**(`content`: [SubjectiveGroupAboutMessageSigned](../interfaces/subjectivegroupaboutmessagesigned.md)): *void*

*Defined in [ssb-subjective-group/src/model/SubjectiveIdentity.ts:81](https://github.com/gpicron/ssb-subjective-group/blob/8054028/src/model/SubjectiveIdentity.ts#L81)*

**Parameters:**

Name | Type |
------ | ------ |
`content` | [SubjectiveGroupAboutMessageSigned](../interfaces/subjectivegroupaboutmessagesigned.md) |

**Returns:** *void*

___

### `Static` from

▸ **from**(`msg`: [AboutFeedIdMessage](../interfaces/aboutfeedidmessage.md) | [SubjectiveGroupAboutMessage](../interfaces/subjectivegroupaboutmessage.md)): *[SubjectiveIdentity](subjectiveidentity.md)*

*Defined in [ssb-subjective-group/src/model/SubjectiveIdentity.ts:38](https://github.com/gpicron/ssb-subjective-group/blob/8054028/src/model/SubjectiveIdentity.ts#L38)*

**Parameters:**

Name | Type |
------ | ------ |
`msg` | [AboutFeedIdMessage](../interfaces/aboutfeedidmessage.md) &#124; [SubjectiveGroupAboutMessage](../interfaces/subjectivegroupaboutmessage.md) |

**Returns:** *[SubjectiveIdentity](subjectiveidentity.md)*
