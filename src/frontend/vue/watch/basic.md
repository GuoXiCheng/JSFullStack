# 基本用法

## 基本示例

`watch 函数`在每次响应式状态变化时触发回调函数，可以执行一些“副作用”，例如：更改 DOM 元素、异步请求。

<<< @/../projects/vue-sandbox/src/components/ComputedAndWatch/WatchBasic.vue

## 回调的触发时机

:::tip
默认情况下，侦听器回调会在父组件更新 (如有) **之后**、所属组件的 DOM 更新**之前**被调用。
:::

### Vue 更新之前触发

::: warning 注意
`{ flush: "sync" }` 每当检测到响应式数据变化时，都会立即执行回调函数。
可以用来监视简单值（例如：布尔值），但应避免在可能多次同步修改的数据源（例如：数组）上使用。
:::

::: code-group

```js [前置刷新]
watch(source, callback, {
  flush: "sync",
});

watchEffect(callback, {
  flush: "sync",
});
```

```js [前置刷新 watchEffect 的等价写法]
import { watchSyncEffect } from "vue";

watchSyncEffect(() => {
  /* 在响应式数据变化时同步执行 */
});
```

:::

### Vue 更新之后触发

::: code-group

```js [后置刷新]
watch(source, callback, {
  flush: "post",
});

watchEffect(callback, {
  flush: "post",
});
```

```js [后置刷新 watchEffect 的等价写法]
import { watchPostEffect } from "vue";

watchPostEffect(() => {
  /* 在 Vue 更新后执行 */
});
```

:::

## 副作用清理

### onCleanup <Badge type="tip" text="Vue3.5 之前" />

```js
watch(id, (newId, oldId, onCleanup) => {
  // ...
  onCleanup(() => {
    // 清理逻辑
  });
});

watchEffect((onCleanup) => {
  // ...
  onCleanup(() => {
    // 清理逻辑
  });
});
```

### onWatcherCleanup <Badge type="tip" text="Vue3.5+" />

当侦听器失效并准备重新调用时，`onWatcherCleanup`会在下一次调用之前执行。

::: warning 注意
`onWatcherCleanup` 仅在 `Vue3.5+` 中支持。
并且必须在 `watch` 或 `watchEffect` 回调函数的同步执行期间调用，不能在异步函数的`await`语句之后调用。
:::

```js
import { watch, onWatcherCleanup } from "vue";

watch(id, (newId) => {
  const controller = new AbortController();

  fetch(`/api/${newId}`, { signal: controller.signal }).then(() => {
    // 回调逻辑
  });

  onWatcherCleanup(() => {
    // 终止过期请求
    controller.abort();
  });
});
```

## 停止侦听

使用**同步**语句创建的侦听器，会自动绑定到宿主组件实例上，并且会在宿主组件卸载时自动停止。因此，在大多数情况下，无需关心怎么停止侦听器。

如果使用异步回调创建一个侦听器，就必须手动停止它，以防止内存泄漏。

```vue
<script setup>
import { watchEffect } from "vue";

// 它会自动停止
watchEffect(() => {});

// ...这个则不会！
setTimeout(() => {
  watchEffect(() => {});
}, 100);
</script>
```

要手动停止一个侦听器，可以调用 `watch` 或 `watchEffect` 返回的函数：

```js
const unwatch = watchEffect(() => {});

// ...当该侦听器不再需要时
unwatch();
```

:::warning 注意
需要异步创建侦听器的情况很少，应尽可能选择同步创建。
如果需要等待一些异步数据，可以使用条件式的侦听逻辑：

```js
// 需要异步请求得到的数据
const data = ref(null);

watchEffect(() => {
  if (data.value) {
    // 数据加载后执行某些操作...
  }
});
```

:::
