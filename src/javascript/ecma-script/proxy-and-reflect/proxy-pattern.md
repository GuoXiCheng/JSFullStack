# 代理模式

## 跟踪属性访问

通过捕获`get`、`set` 和 `has` 等操作，可以知道对象属性在何时何处被访问。

<<< @/../projects/javascript-sandbox/src/proxy-and-reflect/proxy-pattern.ts#trace-attribute

## 隐藏属性

代理的内部实现对外部实现不可见，因此可以隐藏对象的属性。

<<< @/../projects/javascript-sandbox/src/proxy-and-reflect/proxy-pattern.ts#hidden-attribute

## 属性验证

所有的赋值操作都会触发 `set` 捕获器，因此可以根据情况决定允许赋值或拒绝赋值。

<<< @/../projects/javascript-sandbox/src/proxy-and-reflect/proxy-pattern.ts#validate-attribute

## 函数参数验证

<<< @/../projects/javascript-sandbox/src/proxy-and-reflect/proxy-pattern.ts#validate-function-parameter

## 构造函数参数验证

<<< @/../projects/javascript-sandbox/src/proxy-and-reflect/proxy-pattern.ts#validate-constructor-parameter

## 数据绑定

<<< @/../projects/javascript-sandbox/src/proxy-and-reflect/proxy-pattern.ts#data-binding

## 可观察对象

<<< @/../projects/javascript-sandbox/src/proxy-and-reflect/proxy-pattern.ts#observable-object
