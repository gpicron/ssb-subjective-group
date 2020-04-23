[ssb-subjective-group](../README.md) › [SSBPApi](ssbpapi.md)

# Interface: SSBPApi

## Hierarchy

* **SSBPApi**

## Index

### Properties

* [id](ssbpapi.md#id)

### Methods

* [_flumeUse](ssbpapi.md#_flumeuse)
* [publish](ssbpapi.md#publish)

## Properties

###  id

• **id**: *[FeedId](../README.md#feedid)*

*Defined in [ssb-subjective-group/src/index.ts:46](https://github.com/gpicron/ssb-subjective-group/blob/8054028/src/index.ts#L46)*

## Methods

###  _flumeUse

▸ **_flumeUse**<**T**, **U**, **R**, **S**>(`viewName`: string, `viewFactory`: Function): *[View](../README.md#view)*

*Defined in [ssb-subjective-group/src/index.ts:42](https://github.com/gpicron/ssb-subjective-group/blob/8054028/src/index.ts#L42)*

**Type parameters:**

▪ **T**

▪ **U**

▪ **R**

▪ **S**

**Parameters:**

Name | Type |
------ | ------ |
`viewName` | string |
`viewFactory` | Function |

**Returns:** *[View](../README.md#view)*

___

###  publish

▸ **publish**<**T**>(`msq`: T): *Promise‹[Msg](../README.md#msg)‹T››*

*Defined in [ssb-subjective-group/src/index.ts:41](https://github.com/gpicron/ssb-subjective-group/blob/8054028/src/index.ts#L41)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`msq` | T |

**Returns:** *Promise‹[Msg](../README.md#msg)‹T››*
