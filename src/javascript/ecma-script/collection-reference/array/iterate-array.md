# 迭代数组

迭代数组的方法有：简单 for 循环、`for-of`循环和`forEach`方法。

## 简单 for 循环

正向循环，从头到尾遍历数组。

<<< @/../projects/javascript-sandbox/src/array-method/iterate-array.ts#for-loop-1

反向循环，从尾到头遍历数组。

<<< @/../projects/javascript-sandbox/src/array-method/iterate-array.ts#for-loop-2

使用`continue`跳过某些元素。

<<< @/../projects/javascript-sandbox/src/array-method/iterate-array.ts#for-loop-3

使用`break`提前结束循环。

<<< @/../projects/javascript-sandbox/src/array-method/iterate-array.ts#for-loop-4

## for-of 循环

`for-of`循环是 ES6 新增的循环语法。

<<< @/../projects/javascript-sandbox/src/array-method/iterate-array.ts#for-of-1

`for-of`循环可以遍历数组的元素和索引。

<<< @/../projects/javascript-sandbox/src/array-method/iterate-array.ts#for-of-2

## forEach 方法

`forEach`方法是数组的实例方法，可以遍历数组的元素。

`forEach`方法接收一个回调函数作为参数，回调函数接收三个参数：当前元素、当前索引和数组本身。

<<< @/../projects/javascript-sandbox/src/array-method/iterate-array.ts#forEach-1

::: details forEach 循环如何提前中断

> [!WARNING]
> 通过异常来中断`forEach`循环是一个**不推荐**做法，如果确实需要在循环中提前中断，通常建议使用`for-of`循环或简单的`for`循环。

`forEach`方法没有提供提前中断的机制，但可以通过抛出异常来提前中断循环。

<<< @/../projects/javascript-sandbox/src/array-method/iterate-array.ts#forEach-2

:::
