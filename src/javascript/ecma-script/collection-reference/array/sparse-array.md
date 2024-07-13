# 稀疏数组

## 什么是稀疏数组

数组中某些索引没有分配值的数组称为稀疏数组。稀疏数组的长度大于其元素的个数。

::: details 稀疏数组与密集数组的区别
稀疏数组的一个特点是数组的某些索引没有分配值，因此即使数组的每个索引都被复制为 `null` 或 `undefined`，这个数组严格意义上也不是稀疏数组。

<<< @/../projects/javascript-sandbox/src/array-method/sparse-array.ts#sparse-array-vs-dense-array
:::

## 创建稀疏数组

创建稀疏数组的常用方法是给数组的高位索引赋值。

稀疏数组的 `length` 属性计算方式是数组中最大索引值加一，因此稀疏数组中的实际元素个数会小于数组的长度。

<<< @/../projects/javascript-sandbox/src/array-method/sparse-array.ts#create-sparse-array

## 检查稀疏数组

可以使用 `in` 或者 `hasOwnProperty` 方法来检查稀疏数组中的索引是否存在。

<<< @/../projects/javascript-sandbox/src/array-method/sparse-array.ts#check-sparse-array

## 遍历稀疏数组

`for...in` 和 `forEach` 循环会跳过稀疏数组中的空位，而简单 for 循环和 `for...of` 循环不会。

<<< @/../projects/javascript-sandbox/src/array-method/sparse-array.ts#iterate-sparse-array
