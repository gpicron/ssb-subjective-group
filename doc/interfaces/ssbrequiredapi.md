[ssb-subjective-group](../README.md) › [SSBRequiredApi](ssbrequiredapi.md)

# Interface: SSBRequiredApi

## Hierarchy

* **SSBRequiredApi**

## Index

### Properties

* [id](ssbrequiredapi.md#id)

### Methods

* [_flumeUse](ssbrequiredapi.md#_flumeuse)
* [publish](ssbrequiredapi.md#publish)

## Properties

###  id

• **id**: *[FeedId](../README.md#feedid)*

*Defined in [ssb-subjective-group/src/ssb-subjective-group-types.ts:20](https://github.com/gpicron/ssb-subjective-group/blob/8054028/src/ssb-subjective-group-types.ts#L20)*

## Methods

###  _flumeUse

▸ **_flumeUse**<**T**, **U**, **R**, **S**>(`viewName`: string, `viewFactory`: Function): *[View](../README.md#view)*

*Defined in [ssb-subjective-group/src/ssb-subjective-group-types.ts:16](https://github.com/gpicron/ssb-subjective-group/blob/8054028/src/ssb-subjective-group-types.ts#L16)*

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

▸ **publish**<**T**>(`msq`: T, `cb`: [Callback](../README.md#callback)‹[Msg](../README.md#msg)‹T››): *void*

*Defined in [ssb-subjective-group/src/ssb-subjective-group-types.ts:15](https://github.com/gpicron/ssb-subjective-group/blob/8054028/src/ssb-subjective-group-types.ts#L15)*

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type |
------ | ------ |
`msq` | T |
`cb` | [Callback](../README.md#callback)‹[Msg](../README.md#msg)‹T›› |

**Returns:** *void*
