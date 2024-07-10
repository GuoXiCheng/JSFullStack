---
aside: false
---

# CommonJS

CommonJS 规范以同步方式声明依赖的模块，主要用于服务器端实现模块化，也可用于浏览器环境，但不能在浏览器环境中直接运行。

::: details NodeJS 中的 CommonJS

NodeJS 使用了轻微修改版的 CommonJS 规范：

1. 包装函数：NodeJS 中的每个模块都被一个函数包装，这意味着模块内的变量是局部变量，不会污染全局作用域。这个包装函数有 5 个参数：`exports`、`require`、`module`、`__filename`、`__dirname`。
2. 缓存机制：NodeJS 中的模块在第一次加载后会被缓存，这意味着后续无论引用多少次，都只会加载一次。
3. 解析算法：NodeJS 不仅可以加载`.js`文件，还支持`.json`和`.node`（C++扩展）文件。在查找模块时会尝试多个文件名和目录结构，例如`index.js`文件或`package.json`文件中的`main`字段。
4. 路径解析：在使用`require()`时，NodeJS 支持绝对路径、相对路径和模块名的解析，模块名解析时会查找`node_modules`中的模块。

:::

::: details 浏览器中使用 CommonJS

如果需要在浏览器环境中使用 CommonJS，必须与原生的模块语法之间构筑“桥梁”。

因为没有封装的 CommonJS 代码在浏览器中执行会创建全局变量，所以模块级代码和浏览器运行时之间需要某种“屏障”。

常见的解决方案是提前把模块打包好，将模块代码封装在函数闭包中，最终只提供一个文件。为了以正确的顺序打包模块，必须事先生成全面的模块依赖图。
:::

```js
// 导入模块
const moduleA = require("./moduleA");

// 导出整个模块
module.exports = {
  name: "moduleB",
  moduleA,
};

// 导出多个属性或方法
exports.name = "moduleB";
exports.moduleA = moduleA;
```
