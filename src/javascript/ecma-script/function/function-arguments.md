# 函数参数

## 什么是函数参数

函数参数是函数定义时的变量名。函数调用时，实际参数（实参）是传递给函数的值。实参是实际传递给函数的值，而形参是函数定义时的变量名。

## arguments 对象

`arguments` 对象是一个类数组对象，它包含了函数调用时传递给函数的实参。

`arguments` 对象只有在函数体内部才可以使用。

<<< @/../projects/javascript-sandbox/src/function/function-arguments.js#arguments

## 剩余参数

剩余参数是一个数组，它包含了函数调用时传递给函数的剩余实参。剩余参数只能在函数的最后一个参数位置使用。

<<< @/../projects/javascript-sandbox/src/function/function-arguments.js#rest

:::details arguments 对象和剩余参数的区别

- `arguments` 对象是一个类数组对象，而剩余参数是一个真正的数组。
- `arguments` 对象包含了所有传递给函数的实参，而剩余参数只包含了函数定义时未命名的实参。
  :::
