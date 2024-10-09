# 侦听器的类型

## 深层侦听

:::warning

- 深层侦听需要遍历对象中所有嵌套属性，对于大型数据结构，要注意性能开销。
- 在`Vue 3.5+`中，`deep`选项还支持数字类型，用于指定侦听的深度。

:::

默认情况下，直接给`watch`传递一个响应式对象，会隐式创建深层侦听——即侦听对象内部的所有属性。

也可以显式使用`deep`选项来创建深层侦听。

::: details 查看示例
<<< @/../projects/vue-sandbox/src/components/ComputedAndWatch/WatchDeep.vue
:::

## 即时侦听

`watch 函数`默认在侦听源数据变化时才执行回调函数，可以通过`immediate`选项来立即执行回调函数。

```js
watch(
  source,
  (newValue, oldValue) => {
    // 立即执行，且当 `source` 改变时再次执行
  },
  { immediate: true }
);
```

## 一次性侦听

:::warning
仅支持 `Vue 3.4+`
:::

`watch 函数`默认在侦听源数据每次变化时执行回调函数，可以通过`once`选项来仅执行一次。

```js
watch(
  source,
  (newValue, oldValue) => {
    // 当 `source` 变化时，仅触发一次
  },
  { once: true }
);
```
