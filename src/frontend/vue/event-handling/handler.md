# 事件处理器

## 监听事件

使用`v-on`指令（简写为`@`）来监听 DOM 事件。

例如：`v-on:click="handleClick"` 或 `@click="handleClick"`

## 内联事件处理器

事件被触发时执行内联的表达式语句。

<<< @/../projects/vue-sandbox/src/components/EventHandling/InlineHander.vue

## 方法事件处理器

事件被触发时执行一个指向组件上定义的方法的属性名或是路径。

:::tip
方法事件处理器会自动接收原生 DOM 事件并触发执行。
:::

<<< @/../projects/vue-sandbox/src/components/EventHandling/MethodHandler.vue
