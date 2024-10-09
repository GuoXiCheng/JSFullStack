# 基本用法

## 基本示例

`watch 函数`在每次响应式状态变化时触发回调函数，可以执行一些“副作用”，例如：更改 DOM 元素、异步请求。

::: details 查看示例
<<< @/../projects/vue-sandbox/src/components/ComputedAndWatch/WatchBasic.vue
:::

## 侦听源数据类型

### ref 或 reactive

::: details 查看示例
<<< @/../projects/vue-sandbox/src/components/ComputedAndWatch/WatchRef.vue
:::

### getter 函数

::: details 查看示例
<<< @/../projects/vue-sandbox/src/components/ComputedAndWatch/WatchGetter.vue
:::

### 多个侦听源

::: details 查看示例
<<< @/../projects/vue-sandbox/src/components/ComputedAndWatch/WatchArr.vue
:::
