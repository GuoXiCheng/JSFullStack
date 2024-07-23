# 修饰符

## .lazy

`v-model` 默认会在每次 `input` 事件触发后同步数据，可以添加 `lazy` 修饰符，从而转变为在 `change` 事件触发后同步数据。

<<< @/../projects/vue-sandbox/src/components/Form/Modifier.vue#lazy

## .number

`v-model` 默认会将输入的值转换为字符串，可以添加 `number` 修饰符，从而将输入的值转换为数字。

::: details

- 如果输入的值无法被`parseFloat`解析为数字，那么将返回原始值。
- `number` 修饰符会在输入框有 `type="number"` 时自动生效。

:::

<<< @/../projects/vue-sandbox/src/components/Form/Modifier.vue#number

## .trim

`v-model` 默认会保留输入的值的前后空格，可以添加 `trim` 修饰符，从而去除输入的值的前后空格。

<<< @/../projects/vue-sandbox/src/components/Form/Modifier.vue#trim
