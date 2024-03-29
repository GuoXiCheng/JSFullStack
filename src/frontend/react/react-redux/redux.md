# Redux

## 什么是 Redux
Redux 是一个JavaScript状态管理库，它可以帮助你管理整个应用的状态。Redux 是一个单向数据流的架构，它的核心概念是：**store**、**action**、**reducer**。

## Redux 核心概念
### Store
Store 是一个对象，用来保存应用的 State。Redux 应用只有一个单一的 Store。

### Reducer
Reducer 是一个纯函数，用来根据 Action 来更新 State。

Reducer 接收两个参数：当前 State 和 Action，并返回一个新的 State。

### Action
Action 是一个普通的 JavaScript 对象，用来描述发生了什么事情。

Action 必须包含一个 type 属性，用来描述 Action 的类型。

## Redux VS Context
Context 与 Redux 相比，存在一些局限性：
1. 如果有大量的状态需要共享，Context 可能会造成深度的嵌套。
2. Context 不适合需要频繁更新的状态。