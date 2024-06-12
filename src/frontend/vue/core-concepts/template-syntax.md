# 模版语法

## 文本插值

使用双大括号可以绑定数据到文本节点：

```vue
<span>Message: {{ msg }}</span>
```

## 原始 HTML

使用 `v-html` 指令可以输出原始 HTML：

```vue
<div v-html="rawHtml"></div>
```

## 属性绑定

使用 `v-bind` 指令可以绑定元素属性：

```vue
<div v-bind:id="dynamicId"></div>

<!-- 简写 -->
<div :id="dynamicId"></div>

<!-- 同名简写（vue3.4以上） -->
<div :id></div>
```

## 表达式

Vue 支持在模板中绑定表达式：

```vue
{{ number + 1 }}

{{ ok ? "YES" : "NO" }}

{{ message.split("").reverse().join("") }}

<div :id="`list-${id}`"></div>

<!-- 调用函数 -->
<time :title="toTitleDate(date)" :datetime="date">
  {{ formatDate(date) }}
</time>
```
