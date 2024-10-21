# 开始使用

## 安装 pinia

```bash
npm install pinia
```

## 创建 pinia 实例

::: code-group

```js [Vue 3]
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount("#app");
```

```js [Vue 2]
import { createPinia, PiniaVuePlugin } from "pinia";

Vue.use(PiniaVuePlugin);
const pinia = createPinia();

new Vue({
  el: "#app",
  // 其他配置...
  // ...
  // 请注意，同一个`pinia'实例
  // 可以在同一个页面的多个 Vue 应用中使用。
  pinia,
});
```

:::
