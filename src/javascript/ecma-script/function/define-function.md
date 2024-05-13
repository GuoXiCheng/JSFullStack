# 定义函数

## 函数声明

函数声明会在执行前被提升到作用域的顶部，因此可以在声明之前调用函数。

```js
function functionName(arg1, arg2, ...argN) {
  // 函数体
}
```

## 函数表达式

函数表达式通常被赋值给一个变量，这种方式的函数不会被提升，因此无法在声明之前调用函数。

```js
const functionName = function (arg1, arg2, ...argN) {
  // 函数体
};
```

## 箭头函数

箭头函数是 ES6 新增的函数语法，它的特点是没有自己的 `this`，`arguments`，`super` 或 `new.target`，这些值由外围最近一层非箭头函数决定。

```js
const functionName = (arg1, arg2, ...argN) => {
  // 函数体
};
```

## 即时调用函数

即时调用函数是在声明后立即调用的函数。

```js
(function () {
  // 函数体
})();
```

## Generator 函数

Generator 函数是 ES6 新增的函数语法，它可以通过 `yield` 关键字暂停和恢复函数的执行。

```js
function* functionName() {
  let id = 0;
  while (true) {
    yield id++;
  }
}
```

## 异步函数

异步函数是 ES8 新增的函数语法，它可以通过 `await` 关键字等待异步操作的结果。

```js
async function functionName() {
  const data = await fetch("https://api.example.com");
  return data.json();
}
```
