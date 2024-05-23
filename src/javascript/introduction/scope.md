# JavaScript 作用域

## 什么是作用域

作用域是指程序中变量和函数可被访问的区域。

JavaScript 中的作用域分为：全局作用域、函数作用域和块级作用域。

::: details 什么是词法作用域

词法作用域是指代码中变量和函数的作用域是在代码编写时就确定的，而不是在代码执行时确定的。

JavaScript 遵循词法作用域。

:::

### 全局作用域

全局作用域是指在代码中任何地方都能访问的变量和函数。

```javascript
var a = 1;
function foo() {
  console.log(a);
}
foo(); // 1
```

### 函数作用域

函数作用域是指在函数内部定义的变量和函数只能在函数内部访问。

```javascript
function foo() {
  var a = 1;
  console.log(a);
}
foo(); // 1
console.log(a); // ReferenceError: a is not defined
```

### 块级作用域

块级作用域是指在代码块内部定义的变量和函数只能在代码块内部访问。

```javascript
if (true) {
  let a = 1;
  console.log(a);
}
console.log(a); // ReferenceError: a is not defined
```

## 作用域链

作用域链是指在代码中查找变量和函数的过程。

```javascript
var a = 1;
function foo() {
  var b = 2;
  function bar() {
    var c = 3;
    console.log(a, b, c);
  }
  bar(); // 1 2 3
}
foo();
```
