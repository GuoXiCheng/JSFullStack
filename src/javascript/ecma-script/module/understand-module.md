---
aside: false
---

# 理解模块

## 理解模块模式

模块模式的核心思想是把逻辑分块，独立封装，每个块自行决定向外暴露的内容，并自行决定引入时执行哪些外部代码。

## 模块模式的实现

ES6 之前的模块有时会使用立即执行函数（IIFE）和闭包来实现。

通过把 IIFE 实现的模块的返回值赋值给一个变量，就可以为模块创建一个命名空间。为暴露公共 API，IIFE 实现的模块通常会返回一个对象，其属性就是模块命名空间中的公共成员。

```js
var Foo = (functions() {
    return {
        baz: 'baz'
        bar: function() {
            console.log(this.baz);
        }
    };
})();

Foo.bar();
Foo.baz;
```

可以给 IIFE 实现的模块传递参数，以便使用外部的值：

```js
const bar = 'bar';

var Foo = (function(bar) {
    return {
        baz: 'baz'
        bar: function() {
            console.log(bar);
        }
    };
})(bar);
```

可以给 IIFE 实现的模块配置扩展，并且无论模块是否存在：

```js
var Foo = (function (Foo) {
  Foo.baz = "baz";
  Foo.bar = function () {
    console.log(Foo.baz);
  };
  return Foo;
})(Foo || {});
```
