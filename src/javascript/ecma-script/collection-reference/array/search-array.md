# 搜索数组

搜索数组的方法有：`indexOf()`、`lastIndexOf()`、`find()`、`findIndex()`、`includes()`。

## indexOf()

`indexOf()`方法在数组中**从前往后**搜索，找到**第一个匹配**的元素就返回其索引。如果不存在，则返回-1。

<<< @/../projects/javascript-sandbox/src/array-method/search-array.ts#indexOf-1

`indexOf()`方法还可以接受第二个参数，如果是正数，则表示从第几个元素开始从前往后搜索。

<<< @/../projects/javascript-sandbox/src/array-method/search-array.ts#indexOf-2

第二个参数可以是负数，表示从倒数第几个元素开始搜索（`length - fromIndex`）。

<<< @/../projects/javascript-sandbox/src/array-method/search-array.ts#indexOf-3

## lastIndexOf()

`lastIndexOf()`方法在数组中**从后往前**搜索，找到 **第一个匹配（最后一个索引）** 的元素就返回其索引。如果不存在，则返回-1。

<<< @/../projects/javascript-sandbox/src/array-method/search-array.ts#lastIndexOf-1

`lastIndexOf()`方法还可以接受第二个参数，如果是正数，则表示从第几个元素开始从后往前搜索。

<<< @/../projects/javascript-sandbox/src/array-method/search-array.ts#lastIndexOf-2

第二个参数可以是负数，表示从倒数第几个元素开始搜索（`length - fromIndex`）。

<<< @/../projects/javascript-sandbox/src/array-method/search-array.ts#lastIndexOf-3

## find()

`find()`方法返回数组中**第一个匹配**的元素。如果没有找到匹配的元素，则返回 `undefined`。

<<< @/../projects/javascript-sandbox/src/array-method/search-array.ts#find

## findIndex()

`findIndex()`方法返回数组中**第一个匹配**的元素的索引。如果没有找到匹配的元素，则返回 -1。

<<< @/../projects/javascript-sandbox/src/array-method/search-array.ts#findIndex

## includes()

`includes()`方法返回一个布尔值，表示数组中是否包含指定的值。

<<< @/../projects/javascript-sandbox/src/array-method/search-array.ts#includes-1

`includes()`方法还可以接受第二个参数，表示从第几个元素开始搜索。

<<< @/../projects/javascript-sandbox/src/array-method/search-array.ts#includes-2

第二个参数可以是负数，表示从倒数第几个元素开始搜索（`length - fromIndex`）。

<<< @/../projects/javascript-sandbox/src/array-method/search-array.ts#includes-3

::: details 搜索数组的比较算法差异

> [!TIP]
>
> `indexOf()`和`lastIndexOf()`方法都是使用严格相等运算符（`===`）来比较元素的，而`includes()`方法则是使用`SameValueZero`算法来比较元素的。

因此，`indexOf()`和`lastIndexOf()`方法无法区分`NaN`，而`includes()`方法可以。

<<< @/../projects/javascript-sandbox/src/array-method/search-array.ts#check-not-a-number
:::
