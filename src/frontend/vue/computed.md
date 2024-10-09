# 计算属性

## 基本用法

`computed()`方法期望接收一个`getter函数`，并返回一个`ref`对象。

`getter函数`会在计算属性的依赖项（`author.books`）发生变化时重新计算。

::: details 查看示例
<<< @/../projects/vue-sandbox/src/components/ComputedAndWatch/ComputedBasic.vue
:::

## 可写计算属性

计算属性默认是只读的。

可以同时提供`getter`和`setter`函数创建可写的计算属性。

::: details 查看示例
<<< @/../projects/vue-sandbox/src/components/ComputedAndWatch/ComputedWritable.vue
:::

## 最佳实践

### 计算属性缓存

使用方法而不是计算属性可以得到完全相同的结果，不同之处在于**计算属性值会基于其响应式依赖被缓存**。

方法调用**总是**会在重新渲染发生时再次执行函数。

```vue
<!-- 模板中 -->
<p>{{ calculateBooksMessage() }}</p>
```

```js
// 组件中
function calculateBooksMessage() {
  return author.books.length > 0 ? "Yes" : "No";
}
```

### getter 方法不应有副作用

计算属性的 getter 应只做计算而没有其他副作用。

**不要**在 getter 中做异步请求、**不要**改变其他状态、**不要**更改 DOM。

### 避免直接修改计算属性值

从计算属性返回的值是派生状态。可以把它看作是一个“临时快照”，每当源状态发生变化时，就会创建一个新的快照。更改快照是没有意义的，因此计算属性的返回值应该被视为只读的，并且永远不应该被更改——应该更新它所依赖的源状态以触发新的计算。
