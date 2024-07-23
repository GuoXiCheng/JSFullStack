# 双向绑定

## 什么是双向绑定

在前端处理表单时，常常需要将表单输入的内容同步给 Javascript 变量，或者将 Javascript 变量的值同步给表单输入。这种双向的数据同步，就是双向绑定。

::: warning

- `v-model` 只能用在表单元素上。
- `v-model` 会忽略所有表单元素的 `value`、`checked`、`selected` 特性的初始值，而总是将 `Vue 实例`的数据作为数据来源。
- `v-model` 会根据所使用的元素自动使用对应的 DOM 属性和事件组合：
  - `<input>` 和 `<textarea>` 元素绑定 `value` 属性并监听 `input` 事件；
  - `checkbox` 和 `radio` 绑定 `checked` 属性并监听 `change` 事件；
  - `<select>` 绑定 `value` 属性并监听 `change` 事件。

:::

## 文本框

<<< @/../projects/vue-sandbox/src/components/Form/TextBox.vue

## 复选框

::: code-group

<<< @/../projects/vue-sandbox/src/components/Form/CheckBox.vue [基本用法]

<<< @/../projects/vue-sandbox/src/components/Form/CheckBoxValueBind.vue [值绑定]

:::

## 单选框

::: code-group

<<< @/../projects/vue-sandbox/src/components/Form/RadioBtn.vue [基本用法]

<<< @/../projects/vue-sandbox/src/components/Form/RadioBtnValueBind.vue [值绑定]

:::

## 下拉选框

::: details
如果 `v-model` 表达式的初始值不匹配任何一个选择项，`<select>` 元素会渲染成一个“未选择”的状态。在 iOS 上，这将导致用户无法选择第一项，因为 iOS 在这种情况下不会触发一个 change 事件。因此，建议提供一个空值的禁用选项。
:::

::: code-group

<<< @/../projects/vue-sandbox/src/components/Form/Selector.vue [基本用法]

<<< @/../projects/vue-sandbox/src/components/Form/SelectorValueBind.vue [值绑定]

:::
