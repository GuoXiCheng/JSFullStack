# 非受控组件

## 什么是非受控组件

非受控组件是指表单元素的值不受 React 控制，而是由 DOM 元素本身来控制的组件。

## 基本用法

非受控组件的表单中的输入值不受 React 控制，通过`useRef()`保存 DOM 元素的引用，并通过`current`属性来获取 DOM 元素的值。

<<< @/../projects/react-sandbox/src/pages/form-demo/UncontrolledDemo.tsx
