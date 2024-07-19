# 列表渲染

## 基于数组的渲染

<<< @/../projects/vue-sandbox/src/components/TemplateSyntax/ListRenderArr.vue

## 基于对象的渲染

<<< @/../projects/vue-sandbox/src/components/TemplateSyntax/ListRenderObj.vue

## 基于范围的渲染

v-for 可以直接接受一个整数值，表示渲染多少次，n 的初值从 1 开始。

<<< @/../projects/vue-sandbox/src/components/TemplateSyntax/ListRenderN.vue

## template 上的 v-for

如果需要渲染多个元素，可以将它们包装在一个 `<template>` 元素内，并使用 `v-for` 来渲染一个包含多个元素的块。

<<< @/../projects/vue-sandbox/src/components/TemplateSyntax/ListRenderTemplate.vue

## v-for 与 v-if

在同一个元素上使用 `v-if` 和 `v-for` 时，`v-if` 比 `v-for` 优先级更高，这意味着 `v-if` 将无法访问到 `v-for` 中的变量。

推荐的做法是在外先包装一层 `<template>` 元素，在其上使用 `v-for`，然后在内部使用 `v-if`。

<<< @/../projects/vue-sandbox/src/components/TemplateSyntax/ListRenderIf.vue
