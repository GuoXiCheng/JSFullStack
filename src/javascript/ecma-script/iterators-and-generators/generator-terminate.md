# 提前终止生成器

## 使用 `return` 提前终止生成器

所有的生成器对象都有 `return()` 方法，只要通过它进入关闭状态，就无法恢复。后续调用 `next()` 方法都会显示 `done:true` 状态。

<<< @/../projects/javascript-sandbox/src/iterators-and-generators/generator-terminate.ts#generator-return

## 使用 `throw` 提前终止生成器

`throw()` 方法会在暂停的时候将一个错误注入到生成器对象中，如果生成器对象没有捕获这个错误，就会提前终止。

<<< @/../projects/javascript-sandbox/src/iterators-and-generators/generator-terminate.ts#generator-throw

如果生成器内部捕获了错误，生成器就不会关闭，还可以恢复执行。错误处理会跳过对应的 `yield` 语句。

<<< @/../projects/javascript-sandbox/src/iterators-and-generators/generator-terminate.ts#generator-throw-catch
