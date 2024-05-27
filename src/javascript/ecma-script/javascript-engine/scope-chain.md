# 作用域链

## 什么是作用域链

作用域链是指在代码中查找变量和函数的过程。

当在 JavaScript 中使用一个变量时，JavaScript 引擎会首先尝试在当前作用域下查找该变量，如果没找到，就会沿着作用域链向上查找，直到找到该变量或到达全局作用域。

如果在全局作用域下也没找到该变量，JavaScript 引擎会在非严格模式下隐式地创建一个全局变量，而在严格模式下会抛出`ReferenceError`异常。

::: details 作用域链的示例

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

变量`a`被定义在全局作用域中，变量`b`被定义在`foo`函数作用域中，变量`c`被定义在`bar`函数作用域中。

当`console.log(a, b, c)`执行时，JavaScript 引擎首先在`bar`函数作用域中查找变量`c`，由于变量`b`不在`bar`函数作用域中，JavaScript 引擎会沿着作用域链向上查找，找到变量`b`，然后继续向上查找，找到变量`a`，最终输出`1 2 3`。

:::
