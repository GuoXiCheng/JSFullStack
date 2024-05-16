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

## map 方法

map 方法**创建一个新数组**，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。

<<< @/../projects/javascript-sandbox/src/array-method/iterate-array.ts#map

## filter 方法

filter 方法创建给定数组一部分的浅拷贝，其中包含通过所提供函数实现的测试的所有元素。

<<< @/../projects/javascript-sandbox/src/array-method/iterate-array.ts#filter

## reduce 方法

reduce 方法对数组中的每个元素按序执行一个 reducer 函数，每一次运行 reducer 函数会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个值。

::: details 不存在“先前的计算结果”时
第一次执行 reducer 函数时，不存在“先前的计算结果”。

如果需要 reducer 函数从数组索引 0 的元素开始执行，则需要传递初始值。

否则，数组索引为 0 的元素将作为初始值，reducer 函数将从数组索引为 1 的元素开始执行。
:::

<<< @/../projects/javascript-sandbox/src/array-method/iterate-array.ts#reduce

## every 方法

every 方法测试数组的所有元素是否都通过了指定函数的测试，并返回一个布尔值。

<<< @/../projects/javascript-sandbox/src/array-method/iterate-array.ts#every

## some 方法

some 方法测试数组中的某些元素是否通过了指定函数的测试，并返回一个布尔值。

<<< @/../projects/javascript-sandbox/src/array-method/iterate-array.ts#some
