# Reducer 和 Context

## 使用 Reducer 和 Context 拓展你的应用

Reducer 可以用来整合组件的状态更新逻辑。

Context 可以用来将数据深入传递给其他组件。

结合使用 Reducer 和 Context，可以共同管理一个复杂页面的状态。

## 基本用法

-   首先创建一个 Context 对象用于共享值。
-   然后创建一个 Reducer 函数用于处理状态更新逻辑。
-   接着创建一个 Provider 组件，将 Context 对象和 Reducer 函数传递给 Provider 组件。
-   最后在需要使用共享值的组件中使用 `useContext()` 消费共享值。

::: code-group
<<< @/../projects/react-sandbox/src/pages/state-demo/CounterContext.ts [创建 Context 对象]

<<< @/../projects/react-sandbox/src/pages/state-demo/CounterReducer.ts [创建 Reducer 函数]

<<< @/../projects/react-sandbox/src/pages/state-demo/CounterProvider.tsx [创建 Provider 组件]

<<< @/../projects/react-sandbox/src/pages/state-demo/CounterWithReducerContext.tsx [消费共享值]
:::
