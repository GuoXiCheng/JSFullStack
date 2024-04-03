# useImperativeHandle

## 什么是 useImperativeHandle

`useImperativeHandle` 可以用来自定义由ref向父组件暴露的实例属性，以此可以控制父组件对子组件实例的有限访问，从而避免父组件直接操作子组件实例。

## 基本用法

`useImperativeHandle` 接收两个参数，第一个参数是一个ref对象，第二个参数是一个函数。

该函数返回一个对象，该对象中包含想要暴露给父组件的属性和方法。当父组件通过ref对象访问子组件中的内容时，只能访问到这个对象中的属性和方法。

<<< @/../projects/react-sandbox/src/pages/hook-demo/UseImperativeHandleBasic.tsx