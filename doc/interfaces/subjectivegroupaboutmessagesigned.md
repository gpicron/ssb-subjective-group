[ssb-subjective-group](../README.md) › [SubjectiveGroupAboutMessageSigned](subjectivegroupaboutmessagesigned.md)

# Interface: SubjectiveGroupAboutMessageSigned

The base about message is signed with the subjectiveId key pair

## Hierarchy

  ↳ [SubjectiveGroupAboutMessage](subjectivegroupaboutmessage.md)

  ↳ **SubjectiveGroupAboutMessageSigned**

## Index

### Properties

* [about](subjectivegroupaboutmessagesigned.md#about)
* [description](subjectivegroupaboutmessagesigned.md#optional-description)
* [image](subjectivegroupaboutmessagesigned.md#optional-image)
* [name](subjectivegroupaboutmessagesigned.md#optional-name)
* [subjectiveId](subjectivegroupaboutmessagesigned.md#subjectiveid)
* [subjectiveIdSignature](subjectivegroupaboutmessagesigned.md#subjectiveidsignature)
* [type](subjectivegroupaboutmessagesigned.md#type)

## Properties

###  about

• **about**: *[FeedId](../README.md#feedid)*

*Inherited from [AboutFeedIdMessage](aboutfeedidmessage.md).[about](aboutfeedidmessage.md#about)*

*Defined in [src/model/About.ts:12](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/model/About.ts#L12)*

___

### `Optional` description

• **description**? : *undefined | string*

*Inherited from [AboutFeedIdMessage](aboutfeedidmessage.md).[description](aboutfeedidmessage.md#optional-description)*

*Defined in [src/model/About.ts:15](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/model/About.ts#L15)*

___

### `Optional` image

• **image**? : *[ImageLink](../README.md#imagelink)*

*Inherited from [AboutFeedIdMessage](aboutfeedidmessage.md).[image](aboutfeedidmessage.md#optional-image)*

*Defined in [src/model/About.ts:14](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/model/About.ts#L14)*

___

### `Optional` name

• **name**? : *[Name](../README.md#name)*

*Inherited from [AboutFeedIdMessage](aboutfeedidmessage.md).[name](aboutfeedidmessage.md#optional-name)*

*Defined in [src/model/About.ts:13](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/model/About.ts#L13)*

___

###  subjectiveId

• **subjectiveId**: *[SubjectiveIdentityId](../README.md#subjectiveidentityid)*

*Inherited from [SubjectiveGroupAboutMessage](subjectivegroupaboutmessage.md).[subjectiveId](subjectivegroupaboutmessage.md#subjectiveid)*

*Defined in [src/model/About.ts:22](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/model/About.ts#L22)*

___

###  subjectiveIdSignature

• **subjectiveIdSignature**: *[AboutMessageIdentitySignature](../README.md#aboutmessageidentitysignature)*

*Defined in [src/model/About.ts:30](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/model/About.ts#L30)*

___

###  type

• **type**: *"about"*

*Inherited from [AboutFeedIdMessage](aboutfeedidmessage.md).[type](aboutfeedidmessage.md#type)*

*Defined in [src/model/About.ts:11](https://github.com/gpicron/ssb-subjective-group/blob/3740865/src/model/About.ts#L11)*
