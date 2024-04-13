# Context

::: details 在使用 Context 之前可以考虑的替代方案

::: code-group

<<< @/../projects/react-sandbox/src/pages/state-demo/ContextReplaceWithProps.tsx [方案一：从传递 Props 开始]

<<< @/../projects/react-sandbox/src/pages/state-demo/ContextReplaceWithChildren.tsx [方案二：抽象组件并 将 JSX 作为 children 传递 给它们]

:::

## 什么是 Context

Context 是 React 中提供的可以在组件树中直接传递数据而无需逐层传递 Props 的功能。

## 基本用法

-   首先通过`createContext`方法**创建**一个 Context 对象
-   然后通过`Context.Provider`组件**提供**一个共享的值
-   最后通过`Context.Consumer`组件**消费**这个共享的值

:::code-group
<<< @/../projects/react-sandbox/src/pages/state-demo/ContextTheme.ts[创建]

<<< @/../projects/react-sandbox/src/pages/state-demo/ContextBasicProvider.tsx[提供]

<<< @/../projects/react-sandbox/src/pages/state-demo/ContextBasicConsumer.tsx[消费]
:::
