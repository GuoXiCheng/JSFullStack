# Vuex 基础

## 安装 Vuex

```bash
npm install vuex@next --save
```

## 最简单的 Store

每一个 Vuex 应用的核心是 store（仓库），store 包含着应用中大部分的状态（state）。

::: code-group
<<< @/../projects/vue-sandbox/src/stores/vuex-store.ts [创建一个 Store]

```js [注册到Vue应用中]
import { createApp } from "vue";
import App from "./App.vue";
import { vuexStore } from "./stores/vuex-store";

const app = createApp(App);

app.mount("#app");

app.use(vuexStore);
```

<<< @/../projects/vue-sandbox/src/components/StateManagement/BasicStore.vue [使用 Store]
:::

## Vuex 和单纯的全局对象的两点区别

1. Vuex 的状态是响应式存储的。

2. 不能直接改变 store 中的状态，只能通过提交 mutation 来改变状态。
