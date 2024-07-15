# 插值表达式

## 什么是插值表达式

插值表达式允许在 HTML 模版中使用双大括号 `{{}}` 包裹 Javascript 表达式，表达式的值会被直接插入到模版中。

## 插值表达式的使用

所有可以被求值的 Javascript 代码都可以用在插值表达式中，例如：文本内容、三元表达式、数字计算、函数调用等。

<<< @/../projects/vue-sandbox/src/components/TemplateSyntax/Interpolation.vue
