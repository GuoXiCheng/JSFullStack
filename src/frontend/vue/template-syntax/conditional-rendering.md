# 条件渲染

## v-if-else

<<< @/../projects/vue-sandbox/src/components/TemplateSyntax/ConditionalRenderIf.vue

## template 上的 v-if

如果需要条件性地渲染多个元素，可以将它们包装在一个 `<template>` 元素内，并使用 `v-if` 控制它们的显示。

<<< @/../projects/vue-sandbox/src/components/TemplateSyntax/ConditionalRenderTemplate.vue

## v-show

`v-show` 指令与 `v-if` 类似，但不支持在 `<template>` 元素上使用，也不支持与 `v-else` 搭配使用。

<<< @/../projects/vue-sandbox/src/components/TemplateSyntax/ConditionalRenderShow.vue

## v-if vs. v-show

`v-if` 是“真正的”按条件渲染，在切换条件时，区块内的事件监听器和子组件会被销毁并重建。并且在初次渲染条件为假值时，不会做任何事，只有在条件为真时才会渲染。

`v-show` 无论条件如何，元素总是会被渲染，并且只是简单地基于 CSS 的 `display` 属性进行切换。

综上所述，`v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。所以，如果需要频繁切换，使用 `v-show` 较好；如果在运行时条件很少改变，使用 `v-if` 较好。
