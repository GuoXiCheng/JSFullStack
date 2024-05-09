# 浅拷贝和深拷贝

## 浅拷贝

浅拷贝是与拷贝源对象共享相同的引用值，因此，当源对象发生变化时，拷贝对象也会发生变化。

## 深拷贝

深拷贝中，源和副本是完全独立的。

深拷贝是与拷贝源对象不共享相同的引用值，因此，当源对象发生变化时，拷贝对象不会发生变化。

## 如何实现深拷贝

### JSON.parse() 和 JSON.stringify()

通过将对象转换为 JSON 字符串，然后再将字符串解析为对象是一种简单快速的深拷贝方法。

但是在转换的过程中，会丢失对象的原型链，因此，无法拷贝函数、日期对象、正则对象、undefined 等数据。

<<< @/../projects/javascript-sandbox/src/deep-copy.ts#JSON

### 递归

如果对象中包含复杂的数据类型（函数、循环引用等），可以使用递归函数来实现深拷贝，这种方法更为通用。

<<< @/../projects/javascript-sandbox/src/deep-copy.ts#recursion

### 第三方库

使用第三方库，如 lodash 的 `cloneDeep()` 方法，可以实现深拷贝。

<<< @/../projects/javascript-sandbox/src/deep-copy.ts#lodash
