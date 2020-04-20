[ssb-social-index](../README.md) › ["model/SubjectiveIdentity"](../modules/_model_subjectiveidentity_.md) › [SubjectiveIdentity](_model_subjectiveidentity_.subjectiveidentity.md)

# Class: SubjectiveIdentity

## Hierarchy

* **SubjectiveIdentity**

## Index

### Constructors

* [constructor](_model_subjectiveidentity_.subjectiveidentity.md#constructor)

### Properties

* [description](_model_subjectiveidentity_.subjectiveidentity.md#optional-description)
* [feeds](_model_subjectiveidentity_.subjectiveidentity.md#feeds)
* [id](_model_subjectiveidentity_.subjectiveidentity.md#id)
* [image](_model_subjectiveidentity_.subjectiveidentity.md#optional-image)
* [name](_model_subjectiveidentity_.subjectiveidentity.md#optional-name)

### Accessors

* [allIds](_model_subjectiveidentity_.subjectiveidentity.md#allids)

## Constructors

###  constructor

\+ **new SubjectiveIdentity**(`id`: [SubjectiveIdentityId](../modules/_model_ids_.md#subjectiveidentityid) | [FeedId](../modules/_model_ids_.md#feedid), `feeds`: ReadonlyArray‹[FeedId](../modules/_model_ids_.md#feedid) | [FeedWithMetainfo](../modules/_model_subjectiveidentity_.md#feedwithmetainfo)›, `name?`: about.Name, `image?`: about.ImageLink, `description?`: undefined | string): *[SubjectiveIdentity](_model_subjectiveidentity_.subjectiveidentity.md)*

*Defined in [model/SubjectiveIdentity.ts:17](https://github.com/gpicron/ssb-subjective-group/blob/ffd218b/src/model/SubjectiveIdentity.ts#L17)*

**Parameters:**

Name | Type |
------ | ------ |
`id` | [SubjectiveIdentityId](../modules/_model_ids_.md#subjectiveidentityid) &#124; [FeedId](../modules/_model_ids_.md#feedid) |
`feeds` | ReadonlyArray‹[FeedId](../modules/_model_ids_.md#feedid) &#124; [FeedWithMetainfo](../modules/_model_subjectiveidentity_.md#feedwithmetainfo)› |
`name?` | about.Name |
`image?` | about.ImageLink |
`description?` | undefined &#124; string |

**Returns:** *[SubjectiveIdentity](_model_subjectiveidentity_.subjectiveidentity.md)*

## Properties

### `Optional` description

• **description**? : *undefined | string*

*Defined in [model/SubjectiveIdentity.ts:17](https://github.com/gpicron/ssb-subjective-group/blob/ffd218b/src/model/SubjectiveIdentity.ts#L17)*

___

###  feeds

• **feeds**: *ReadonlyArray‹[FeedId](../modules/_model_ids_.md#feedid) | [FeedWithMetainfo](../modules/_model_subjectiveidentity_.md#feedwithmetainfo)›*

*Defined in [model/SubjectiveIdentity.ts:13](https://github.com/gpicron/ssb-subjective-group/blob/ffd218b/src/model/SubjectiveIdentity.ts#L13)*

___

###  id

• **id**: *[SubjectiveIdentityId](../modules/_model_ids_.md#subjectiveidentityid) | [FeedId](../modules/_model_ids_.md#feedid)*

*Defined in [model/SubjectiveIdentity.ts:12](https://github.com/gpicron/ssb-subjective-group/blob/ffd218b/src/model/SubjectiveIdentity.ts#L12)*

___

### `Optional` image

• **image**? : *about.ImageLink*

*Defined in [model/SubjectiveIdentity.ts:16](https://github.com/gpicron/ssb-subjective-group/blob/ffd218b/src/model/SubjectiveIdentity.ts#L16)*

___

### `Optional` name

• **name**? : *about.Name*

*Defined in [model/SubjectiveIdentity.ts:15](https://github.com/gpicron/ssb-subjective-group/blob/ffd218b/src/model/SubjectiveIdentity.ts#L15)*

## Accessors

###  allIds

• **get allIds**(): *ReadonlyArray‹[SubjectiveIdentityId](../modules/_model_ids_.md#subjectiveidentityid) | [FeedId](../modules/_model_ids_.md#feedid)›*

*Defined in [model/SubjectiveIdentity.ts:38](https://github.com/gpicron/ssb-subjective-group/blob/ffd218b/src/model/SubjectiveIdentity.ts#L38)*

This attribute contains the list of all feed ids + the subjective id.  This is useful to perform 'in' query criteria on
ssb-backlinks and ssb-query.

**Returns:** *ReadonlyArray‹[SubjectiveIdentityId](../modules/_model_ids_.md#subjectiveidentityid) | [FeedId](../modules/_model_ids_.md#feedid)›*
