# 数组排序

数组排序的方法有：`reverse()`、`sort()`。

## `reverse()`

`reverse()`方法会**就地**反转数组的元素顺序，并返回同一数组的引用。

<<< @/../projects/javascript-sandbox/src/array-method/sort-array.ts#reverse

::: details 如何在不改变原数组的情况下反转数组

1. 使用`toReverse()`方法，它不会改变原数组，而是返回一个新数组。（自 2023 年 7 月起适用于最新的设备和浏览器，可能不适用于较旧的设备）

2. 使用展开语法获取一个浅拷贝数组，然后使用`reverse()`方法：`[...arr].reverse()`。

:::

## `sort()`

`sort()`方法会**就地**对数组的元素进行排序，并返回同一数组的引用。

默认排序是将元素转换为字符串，然后按照它们的 UTF-16 码元值升序排序。

<<< @/../projects/javascript-sandbox/src/array-method/sort-array.ts#sort-1

`sort()`方法还可以接受一个比较函数作为参数，用于指定排序顺序。

比较函数的返回值是一个数字：

1. 若`a < b`，则返回负数
2. 若`a = b`，则返回 0（NaN 被视为 0）
3. 若`a > b`，则返回正数

<<< @/../projects/javascript-sandbox/src/array-method/sort-array.ts#sort-2

::: details 如何在不改变原数组的情况下对数组排序

1. 使用`toSorted()`方法，它不会改变原数组，而是返回一个新数组。（自 2023 年 7 月起适用于最新的设备和浏览器，可能不适用于较旧的设备）

2. 使用展开语法获取一个浅拷贝数组，然后使用`sort()`方法：`[...arr].sort()`。

:::
