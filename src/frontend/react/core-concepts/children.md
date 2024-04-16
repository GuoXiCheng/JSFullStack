# children

## 什么是 children

`children` 是一个特殊的 prop，它允许将组件作为数据传递到其他组件。

## 基本用法

`props.children`可以是任意的 JSX 元素，包括原始值、React 元素、函数、组件等。

::: code-group

<<< @/../projects/react-sandbox/src/pages/children-demo/ChildrenOriginalValue.tsx [原始值]

<<< @/../projects/react-sandbox/src/pages/children-demo/ChildrenReactElement.tsx [React 元素]

<<< @/../projects/react-sandbox/src/pages/children-demo/ChildrenFunction.tsx [函数]

<<< @/../projects/react-sandbox/src/pages/children-demo/ChildrenComponent.tsx [组件]

:::

## 传递多个具名的子组件

<<< @/../projects/react-sandbox/src/pages/children-demo/ChildrenMultiple.tsx
