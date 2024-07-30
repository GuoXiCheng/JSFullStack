# 自定义迭代器

## 实现迭代器接口

任何实现了 Iterator 接口的对象都可以作为迭代器使用。

<<<@/../projects/javascript-sandbox/src/iterators-and-generators/iterator-custom.ts#custom-iterator

## 提前终止迭代

可选的 `return()` 方法定义了在迭代器被提前关闭时执行的操作。

<<<@/../projects/javascript-sandbox/src/iterators-and-generators/iterator-custom.ts#early-termination
