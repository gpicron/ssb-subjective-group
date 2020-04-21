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

## Constructors

###  constructor

\+ **new SubjectiveIdentity**(`id`: [SubjectiveIdentityId](../README.md#subjectiveidentityid) | [FeedId](../README.md#feedid), `feeds`: ReadonlyArray‹[FeedId](../README.md#feedid) | [FeedWithMetainfo](../README.md#feedwithmetainfo)›, `name?`: about.Name, `image?`: about.ImageLink, `description?`: undefined | string): *[SubjectiveIdentity](subjectiveidentity.md)*

*Defined in [src/model/SubjectiveIdentity.ts:17](https://github.com/gpicron/ssb-subjective-group/blob/9ff5897/src/model/SubjectiveIdentity.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [SubjectiveIdentityId](../README.md#subjectiveidentityid) &#124; [FeedId](../README.md#feedid) |
`feeds` | ReadonlyArray‹[FeedId](../README.md#feedid) &#124; [FeedWithMetainfo](../README.md#feedwithmetainfo)› |
`name?` | about.Name |
`image?` | about.ImageLink |
`description?` | undefined &#124; string |

**Returns:** *[SubjectiveIdentity](subjectiveidentity.md)*

## Properties

### `Optional` description

• **description**? : *undefined | string*

*Defined in [src/model/SubjectiveIdentity.ts:17](https://github.com/gpicron/ssb-subjective-group/blob/9ff5897/src/model/SubjectiveIdentity.ts#L17)*

___

###  feeds

• **feeds**: *ReadonlyArray‹[FeedId](../README.md#feedid) | [FeedWithMetainfo](../README.md#feedwithmetainfo)›*

*Defined in [src/model/SubjectiveIdentity.ts:13](https://github.com/gpicron/ssb-subjective-group/blob/9ff5897/src/model/SubjectiveIdentity.ts#L13)*

___

###  id

• **id**: *[SubjectiveIdentityId](../README.md#subjectiveidentityid) | [FeedId](../README.md#feedid)*

*Defined in [src/model/SubjectiveIdentity.ts:12](https://github.com/gpicron/ssb-subjective-group/blob/9ff5897/src/model/SubjectiveIdentity.ts#L12)*

___

### `Optional` image

• **image**? : *about.ImageLink*

*Defined in [src/model/SubjectiveIdentity.ts:16](https://github.com/gpicron/ssb-subjective-group/blob/9ff5897/src/model/SubjectiveIdentity.ts#L16)*

___

### `Optional` name

• **name**? : *about.Name*

*Defined in [src/model/SubjectiveIdentity.ts:15](https://github.com/gpicron/ssb-subjective-group/blob/9ff5897/src/model/SubjectiveIdentity.ts#L15)*

## Accessors

###  allIds

• **get allIds**(): *ReadonlyArray‹[SubjectiveIdentityId](../README.md#subjectiveidentityid) | [FeedId](../README.md#feedid)›*

*Defined in [src/model/SubjectiveIdentity.ts:38](https://github.com/gpicron/ssb-subjective-group/blob/9ff5897/src/model/SubjectiveIdentity.ts#L38)*

This attribute contains the list of all feed ids + the subjective id.  This is useful to perform 'in' query criteria on
ssb-backlinks and ssb-query.

**Returns:** *ReadonlyArray‹[SubjectiveIdentityId](../README.md#subjectiveidentityid) | [FeedId](../README.md#feedid)›*
