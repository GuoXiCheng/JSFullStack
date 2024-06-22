---
aside: false
---

# history 对象

## 什么是 history 对象

`history` 对象包含用户当前窗口首次使用以来的历史导航记录，每个 `window` 对象都有自己的 `history` 对象。

## 使用 history 导航

`go()` 方法可以沿着用户的历史记录前进（正值）或后退（负值）。

`go()` 方法有两个简写：`back()`（相当于浏览器后退按钮） 和 `forward()`（相当于浏览器前进按钮）。

```js
// 后退一页
history.back();

// 前进一页
history.forward();

// 前进两页
history.go(2);

// 后退两页
history.go(-2);
```
