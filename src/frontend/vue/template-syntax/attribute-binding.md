# 属性绑定

## 什么是属性绑定

使用 `v-bind` 指令可以将 Vue 实例中的数据与 HTML 元素的属性进行绑定，当数据发生变化时，元素的属性也会随之变化。

## 绑定元素属性

v-bind 指令指示 Vue 将 HTML 元素的属性（这里是 src）与组件的属性（这里是 imgSrc 和 src）保持一致。如果绑定的值是 `null` 或 `undefined`，那么该属性会从渲染的元素上移除。

<<< @/../projects/vue-sandbox/src/components/TemplateSyntax/AttributeBind.vue

## 绑定布尔值属性

布尔值的属性绑定会根据 `true` 或 `false` 的值来决定是否将属性添加到元素上。

<<< @/../projects/vue-sandbox/src/components/TemplateSyntax/AttributeBindBool.vue

## 绑定对象属性

通过不带参数的 `v-bind` 指令，可以将包含多个属性的对象绑定到单个元素上。

<<< @/../projects/vue-sandbox/src/components/TemplateSyntax/AttributeBindMultipleValued.vue
