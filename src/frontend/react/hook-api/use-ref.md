# useRef

## 什么是 useRef

`useRef` 用于在函数式组件中创建一个引用（ref），这个引用可以用来存储一个不随组件重新渲染而改变的值，并且这个引用的改变也不会触发组件的重新渲染。

因此`useRef`常见的两个用途是：访问DOM元素和跨渲染周期存储数据。

## ref 和 state 的区别

| ref                                     | state                                              |
| --------------------------------------- | -------------------------------------------------- |
| `useRef(value)` 返回 `{current: value}` | `useState(value)` 返回 `[value, setValue]`         |
| 更改时不触发重新渲染                    | 更改时触发重新渲染                                 |
| 可变——可以在渲染过程之外更新值          | “不可变”——必须通过设置函数更新值，从而排队重新渲染 |
| 不应在渲染期间读取或写入值              | 可随时读取，但每次渲染都有一个不变的state快照      |

## 基本用法

`useRef`可以存储任意JavaScript数据类型，可以通过`ref.current`来获取或修改存储的值，但不会触发重新渲染。

<<< @/../projects/react-sandbox/src/pages/hook-demo/UseRefBasic.tsx

## 操作DOM元素

`useRef`可以用来访问DOM元素，通过`ref.current`可以用来访问DOM元素的属性和方法。

::: tip 为什么使用`useRef`操作DOM元素
1. 因为`useRef`可以跨渲染周期存储数据，所以可以用来存储DOM元素的引用。
2. 因为`useRef`的引用不会触发组件的重新渲染，所以可以用来操作DOM元素，而不会引起性能问题。
:::

<<< @/../projects/react-sandbox/src/pages/hook-demo/UseRefDOM.tsx

## forwardRef

默认情况下，React 不允许访问子组件的 DOM 节点，但是可以通过`forwardRef`来转发`ref`到子组件。

<<< @/../projects/react-sandbox/src/pages/hook-demo/UseRefForward.tsx