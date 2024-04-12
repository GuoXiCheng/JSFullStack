# props

## 什么是 props

props 是 React 中提供的将数据从父组件传递到子组件的机制，是父子组件通信的一种方式。

在 React 中 props 是**只读**的，子组件不能修改 props，以保证数据的单向流动。

## 基本用法

在父组件中，通过在子组件标签上添加属性的方式传递数据。

在子组件中，通过 props 对象获取父组件传递的数据。

<<< @/../projects/react-sandbox/src/pages/state-demo/PropsBasic.tsx

## 解构赋值

在子组件中，可以使用解构赋值的方式获取 props 中的数据。

<<< @/../projects/react-sandbox/src/pages/state-demo/PropsDeconstruct.tsx

## 传递函数

除了传递数据，还可以通过 props 传递函数，实现父子组件之间的通信。

<<< @/../projects/react-sandbox/src/pages/state-demo/PropsFn.tsx

## 剩余参数

在子组件中，可以使用剩余参数的方式获取除了指定的 props 之外的其他 props。

<<< @/../projects/react-sandbox/src/pages/state-demo/PropsRest.tsx

## 默认值

在子组件中，可以给 props 设置默认值，当父组件没有传递该 props 时，使用默认值。

<<< @/../projects/react-sandbox/src/pages/state-demo/PropsDefault.tsx
