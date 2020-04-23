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

*Defined in [ssb-subjective-group/src/model/About.ts:11](https://github.com/gpicron/ssb-subjective-group/blob/8054028/src/model/About.ts#L11)*

___

### `Optional` description

• **description**? : *undefined | string*

*Inherited from [AboutFeedIdMessage](aboutfeedidmessage.md).[description](aboutfeedidmessage.md#optional-description)*

*Defined in [ssb-subjective-group/src/model/About.ts:14](https://github.com/gpicron/ssb-subjective-group/blob/8054028/src/model/About.ts#L14)*

___

### `Optional` image

• **image**? : *[ImageLink](../README.md#imagelink)*

*Inherited from [AboutFeedIdMessage](aboutfeedidmessage.md).[image](aboutfeedidmessage.md#optional-image)*

*Defined in [ssb-subjective-group/src/model/About.ts:13](https://github.com/gpicron/ssb-subjective-group/blob/8054028/src/model/About.ts#L13)*

___

### `Optional` name

• **name**? : *[Name](../README.md#name)*

*Inherited from [AboutFeedIdMessage](aboutfeedidmessage.md).[name](aboutfeedidmessage.md#optional-name)*

*Defined in [ssb-subjective-group/src/model/About.ts:12](https://github.com/gpicron/ssb-subjective-group/blob/8054028/src/model/About.ts#L12)*

___

###  subjectiveId

• **subjectiveId**: *[SubjectiveIdentityId](../README.md#subjectiveidentityid)*

*Inherited from [SubjectiveGroupAboutMessage](subjectivegroupaboutmessage.md).[subjectiveId](subjectivegroupaboutmessage.md#subjectiveid)*

*Defined in [ssb-subjective-group/src/model/About.ts:21](https://github.com/gpicron/ssb-subjective-group/blob/8054028/src/model/About.ts#L21)*

___

###  subjectiveIdSignature

• **subjectiveIdSignature**: *[AboutMessageIdentitySignature](../README.md#aboutmessageidentitysignature)*

*Defined in [ssb-subjective-group/src/model/About.ts:29](https://github.com/gpicron/ssb-subjective-group/blob/8054028/src/model/About.ts#L29)*

___

###  type

• **type**: *"about"*

*Inherited from [AboutFeedIdMessage](aboutfeedidmessage.md).[type](aboutfeedidmessage.md#type)*

*Defined in [ssb-subjective-group/src/model/About.ts:10](https://github.com/gpicron/ssb-subjective-group/blob/8054028/src/model/About.ts#L10)*
