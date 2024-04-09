# 自定义 Hook

## 什么是自定义 Hook

自定义Hook是可以用于在组件间复用状态处理逻辑的函数。

:::warning 注意
- 自定义 Hook 的函数名称必须以 `use` 开头，后跟大写字母开头。
- 自定义 Hook 共享的是状态处理**逻辑**，而不是状态本身。
:::

## 基本用例

自定义一个 `useTheme` Hook，用于在组件中切换主题。

<<< @/../projects/react-sandbox/src/pages/hook-demo/CustomHookWithTheme.tsx