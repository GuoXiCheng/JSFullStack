---
layout: page
sidebar: false
---

<script setup>
import MarkMap from './MarkMap.vue';
</script>

<MarkMap markdown="
# JS全栈
- Web
  - HTML
  - CSS
    - Tailwind CSS
- [JavaScript](javascript/index)
    - [ECMAScript](javascript/ecma-script/index)
      - 基本引用
        - [Date](javascript/ecma-script/basic-reference/date)
        - [RegExp](javascript/ecma-script/basic-reference/reg-exp)
      - 集合引用
        - [Array](javascript/ecma-script/collection-reference/array)
        - [Map](javascript/ecma-script/collection-reference/map)
        - [Set](javascript/ecma-script/collection-reference/set)
      - [迭代器](javascript/ecma-script/iterator)
      - [生成器](javascript/ecma-script/generator)
      - [JSON](javascript/ecma-script/json)
    - DOM
    - BOM
      - window
      - location
      - navigator
      - [screen](javascript/bom/screen)
      - history
- 前端
  - React
    - [JSX语法](frontend/react/jsx)
    - [插槽](frontend/react/slot)
    - [动态组件标识符](frontend/react/dynamic-component-identifier)
    - Styled Components
    - 组件间通信
      - [props](frontend/react/component-interaction/props)
      - [state](frontend/react/component-interaction/state)
      - [双向绑定](frontend/react/component-interaction/two-way-binding)
      - [状态提升](frontend/react/component-interaction/lifting-state-up)
- 后端
  - [NodeJS](backend/nodejs/index)
    - [EventEmitter](backend/nodejs/event-emitter)
    - [File System](backend/nodejs/file-system)
"/>
