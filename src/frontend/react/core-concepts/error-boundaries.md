# 错误边界

## 什么是错误边界

错误边界用于 React 中捕获子组件树中发生的 JavaScript 错误，并输出这些错误，防止整个应用崩溃。

错误边界可以捕获渲染期间、生命周期方法以及其下整个树的构造函数中发生的错误。

## 使用类式错误边界组件

::: code-group
<<< @/../projects/react-sandbox/src/pages/error-boundary-demo/CustomErrorBoundary.tsx [定义]

<<< @/../projects/react-sandbox/src/pages/error-boundary-demo/CustomErrorBoundaryDemo.tsx [使用]
:::

## 使用函数式错误边界组件

目前还无法将错误边界编写为函数式组件，但是可以借助第三方库（[react-error-boundary](https://github.com/bvaughn/react-error-boundary)）来实现。

::: code-group

```bash [安装]
# npm
npm install react-error-boundary

# pnpm
pnpm add react-error-boundary

# yarn
yarn add react-error-boundary
```

<<< @/../projects/react-sandbox/src/pages/error-boundary-demo/ReactErrorBoundary.tsx [使用]

:::
