# 生成器

## 什么是生成器

生成器是 ES6 引入的特殊函数，它可以在函数执行期间暂停，并在需要时恢复执行。

## 定义生成器

通过在函数名称前面加上 `*` 符号，可以定义一个生成器函数。

只要是可以定义函数的地方，就可以定义生成器函数。但是，箭头函数不能定义生成器函数。

<<< @/../projects/javascript-sandbox/src/iterators-and-generators/generator.ts#generator-function
