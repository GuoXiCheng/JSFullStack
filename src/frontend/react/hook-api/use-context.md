# useContext

`useContext`可以用来读取和订阅组件中的Context。

## 基本用法

Context可以向组件树的深层传递状态。

`useContext()`可以在组件树中向上寻找最近的`Context.Provider`。

如果需要通过Context更新传递的数据，则需要结合state使用。

::: code-group

<<< @/../projects/react-sandbox/src/pages/hook-demo/UseContextTheme.ts

<<< @/../projects/react-sandbox/src/pages/hook-demo/UseContextBasic.tsx

:::