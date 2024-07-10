---
aside: false
---

# AMD

AMD（Asynchronous Module Definition）是一种异步模块定义规范，它以浏览器为目标执行环境。

AMD 的策略是让模块声明自己的依赖，运行在浏览器中的模块会按需获取依赖，并在依赖加载完成后立即执行依赖的模块。

浏览器环境中`define`函数可以用来定义模块，[RequireJS](https://requirejs.org/) 的`require`函数可以用来加载模块。

::: code-group

<<< @/../projects/javascript-sandbox/src/module/amd-basic.html[基本用法]

<<< @/../projects/javascript-sandbox/src/module/amd-commonjs-style.html[CommonJS 风格]

<<< @/../projects/javascript-sandbox/src/module/amd-dynamic.html[动态依赖]

:::
