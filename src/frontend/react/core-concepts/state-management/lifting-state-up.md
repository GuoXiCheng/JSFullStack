# 状态提升

## 什么是状态提升

状态提升是一种在 React 中处理共享状态的方法。当多个组件需要共享相同的数据时，可以将该数据提升到这些组件的最近共同祖先中。这样，这些组件就可以通过 props 来访问和修改这个共享的数据。

## 举例

下面是一个简单的例子，演示了如何通过状态提升来处理共享状态。

两个子组件`Panel`共享父组件中的`activeIndex`状态，当点击其中一个子组件时，更新父组件中的`activeIndex`状态，从而实现两个子组件之间状态的共享。

::: tip 提示
状态在哪里，操作状态的方法就在哪里。
:::

::: code-group
<<< @/../projects/react-sandbox/src/pages/state-demo/LiftingState.tsx [父组件]
<<< @/../projects/react-sandbox/src/pages/state-demo/Panel.tsx [子组件]
:::
