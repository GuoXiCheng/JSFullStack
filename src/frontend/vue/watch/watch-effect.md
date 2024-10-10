# watch vs. watchEffect

## watchEffect 的使用场景

`watchEffect` 会自动跟踪回调中的响应式依赖，并在依赖变更时重新运行回调。

::: code-group

<<< @/../projects/vue-sandbox/src/components/ComputedAndWatch/WatchEffect.vue#snippet{js} [watchEffect]

<<< @/../projects/vue-sandbox/src/components/ComputedAndWatch/WatchEffectWatch.vue#snippet{js} [watchEffect 的等价写法]

:::

## 比较 watch 和 watchEffect

`watch` 只追踪明确侦听的数据源。仅在数据确实改变时才触发回调，因此能更精确地控制回调函数的触发时机。

`watchEffect` 会追踪回调中的所有能访问到的响应式依赖。会在副作用发生期间追踪依赖，在有多个依赖时代码会更简洁。

如果需要侦听一个嵌套数据结构中的几个属性，使用`watchEffect`可能会比深层侦听更有效，因为它只跟踪回调中被使用的属性，而不是递归地跟踪所有属性。

::: tip
`watchEffect` 仅会在同步执行期间追踪依赖。在异步执行期间，只有在第一个`await`正常工作前访问到的属性才会被追踪。
:::
