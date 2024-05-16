# 数组扁平化

数组扁平化的方法有：`flat()`、`flatMap()`

## flat()

`flat()` 方法会创建一个新数组，并根据指定深度递归地将所有子数组元素拼接到新数组中。

<<< @/../projects/javascript-sandbox/src/array-method/flatten-array.ts#flat

## flatMap()

`flatMap()` 等价于调用`map()`方法后再调用深度为 1 的`flat()`方法，但比分别调用这两个方法稍微更高效一些。

<<< @/../projects/javascript-sandbox/src/array-method/flatten-array.ts#flatMap
