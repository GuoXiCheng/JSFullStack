# 通过 call、apply 和 bind 调用函数

通过 `call`、`apply` 和 `bind` 方法，可以改变函数的执行上下文。

## 定义 Person 类

<<< @/../projects/javascript-sandbox/src/function/call-apply-bind.ts#Person

## call

`call` 第一个参数指定函数的执行上下文（`this`），剩余的参数是函数的参数。

`call` 方法会立即调用函数，且只临时改变函数的执行上下文。

<<< @/../projects/javascript-sandbox/src/function/call-apply-bind.ts#call

## apply

`apply` 方法第一个参数指定函数的执行上下文（`this`），第二个参数是一个数组，数组中的元素是函数的参数。

`apply` 方法会立即调用函数，且只临时改变函数的执行上下文。

<<< @/../projects/javascript-sandbox/src/function/call-apply-bind.ts#apply

## bind

`bind` 方法接收一个参数，即函数的执行上下文（`this`），返回一个新函数。

`bind` 方法不会立即调用函数，而是返回一个永久改变函数的执行上下文的新函数，可以在稍后调用。

<<< @/../projects/javascript-sandbox/src/function/call-apply-bind.ts#bind

## 区别

- `call` 和 `apply` 方法会立即调用函数，而 `bind` 方法会返回一个新函数，可以在稍后调用。
- `call` 和 `apply` 方法的区别在于参数的传递方式，`call` 方法的参数是逐个传递的，`apply` 方法的参数是数组传递的。
