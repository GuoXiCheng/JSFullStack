# 创建数组

创建数组的方式有：使用数组字面量、对可迭代对象使用扩展操作符、使用构造函数或使用 ES6 新增的`Array.of()`、`Array.from()`。

## 数组字面量

<<< @/../projects/javascript-sandbox/src/array-method/create-array.ts#literal-quantity

## 扩展操作符

扩展操作符可对于任何可迭代对象（可使用`for-of`循环遍历的对象）使用，将其复制（浅）为数组。

<<< @/../projects/javascript-sandbox/src/array-method/create-array.ts#extension-operator

## 构造函数

<<< @/../projects/javascript-sandbox/src/array-method/create-array.ts#constructor

## Array.from()

字符串会被拆分为单字符数组。

<<< @/../projects/javascript-sandbox/src/array-method/create-array.ts#array-from-1

可以使用`Array.from()`将集合对象转换为新数组。

<<< @/../projects/javascript-sandbox/src/array-method/create-array.ts#array-from-2

`Array.from()`还可以接受第二个参数，用于处理数组中的每个元素。

<<< @/../projects/javascript-sandbox/src/array-method/create-array.ts#array-from-3

## Array.of()

<<< @/../projects/javascript-sandbox/src/array-method/create-array.ts#array-of
