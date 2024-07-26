# 编写形式

## 同步形式

同步 API 会阻塞主线程和 NodeJS 事件循环直到操作完成。如果出现错误会抛出异常，可以使用 `try...catch` 来捕获异常。

通常用于在应用程序启动时加载配置，或者在不影响主线程的场景中使用。

```js
const { unlinkSync } = require("node:fs");

try {
  unlinkSync("/tmp/hello");
  console.log("successfully deleted /tmp/hello");
} catch (err) {
  // handle the error
}
```

## 回调形式

回调形式不会阻塞主线程和 NodeJS 事件循环，但可能会导致回调地狱。

```js
const { unlink } = require("node:fs");

unlink("/tmp/hello", (err) => {
  if (err) throw err;
  console.log("successfully deleted /tmp/hello");
});
```

## Promise 形式

Promise 形式可以避免阻塞主线程和 NodeJS 事件循环，同时避免回调地狱。可以写出近乎同步的代码风格，提升可读性。

```js
const { unlink } = require("node:fs/promises");

(async function (path) {
  try {
    await unlink(path);
    console.log(`successfully deleted ${path}`);
  } catch (error) {
    console.error("there was an error:", error.message);
  }
})("/tmp/hello");
```
