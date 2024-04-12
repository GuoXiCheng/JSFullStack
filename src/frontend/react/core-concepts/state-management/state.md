# state

## 什么是 state

state 是 React 中的组件内部状态，当 state 发生变化时，会触发组件的重新渲染。

## 基本用法

通过 React 提供的 Hook API：`useState()`可以用来操作组件中的状态。

`useState()`接受一个初始状态值，返回一个数组，数组的第一个元素是当前状态值，第二个元素是一个函数，用来更新状态值。

<<< @/../projects/react-sandbox/src/pages/state-demo/UseStateBasic.tsx

## 更新时依赖上一个状态

状态更新函数可以接受一个函数作为参数，函数的参数是上一个状态值，返回值是新的状态值。

<<< @/../projects/react-sandbox/src/pages/state-demo/UseStatePre.tsx

## 更新状态的部分属性

使用展开运算符：.`..pre`，可以更新状态对象的部分属性，并保持其他属性不变。

<<< @/../projects/react-sandbox/src/pages/state-demo/UseStatePartial.tsx
