---
layout: page
sidebar: false
---

<script setup>
import MarkMap from './MarkMap.vue';
</script>

<MarkMap markdown="
- JS全栈
  - [JavaScript](javascript/index)
      - [ECMAScript](javascript/ecma-script/index)
        - 基本引用
          - [Date](javascript/ecma-script/basic-reference/date)
          - [正则表达式](javascript/ecma-script/basic-reference/reg-exp)
        - 集合引用
          - [Array](javascript/ecma-script/collection-reference/array)
          - [Map](javascript/ecma-script/collection-reference/map)
          - [Set](javascript/ecma-script/collection-reference/set)
        - [迭代器](javascript/ecma-script/iterator)
        - [生成器](javascript/ecma-script/generator)
        - [JSON](javascript/ecma-script/json)
      - BOM
        - [screen](javascript/bom/screen)
  - 前端
    - React
      - [插槽](frontend/react/slot)
      - [动态组件标识符](frontend/react/dynamic-component-identifier)
      - [React 严格模式](frontend/react/strict-mode)
      - [createPortal](frontend/react/create-portal)
      - 组件间通信
        - [props](frontend/react/component-interaction/props)
        - [state](frontend/react/component-interaction/state)
        - [双向绑定](frontend/react/component-interaction/two-way-binding)
        - [状态提升](frontend/react/component-interaction/lifting-state-up)
      - [Context](frontend/react/context/index)
        - [createContext](frontend/react/context/create-context)
        - [useContext](frontend/react/context/use-context)
        - [Reducer and Context](frontend/react/context/reducer-and-context)
      - [memo](frontend/react/memo)
      - [useMemo](frontend/react/use-memo)
      - [自定义 Hook](frontend/react/custom-hook)
      - 处理表单
        - [受控组件](frontend/react/form/controlled-component)
        - [非受控组件](frontend/react/form/uncontrolled-component)
        - [FormData](frontend/react/form/form-data)
      - React Redux
        - [Redux](frontend/react/react-redux/redux)
        - [Redux Toolkit](frontend/react/react-redux/redux-toolkit)
      - 核心概念
        - [JSX语法](frontend/react/core-concepts/jsx)
        - styles
          - [内联样式](frontend/react/core-concepts/styles/inline-style)
          - [外部样式](frontend/react/core-concepts/styles/external-style)
          - [CSS Modules](frontend/react/core-concepts/styles/css-modules)
          - [Styled Components](frontend/react/core-concepts/styles/styled-components)
          - [Tailwind CSS](frontend/react/core-concepts/styles/tailwind-css)
      - Hook API
        - [useRef](frontend/react/hook-api/use-ref)
        - [useImperativeHandle](frontend/react/hook-api/use-imperative-handle)
        - [useEffect](frontend/react/hook-api/use-effect)
        - [useCallback](frontend/react/hook-api/use-callback)
  - 后端
    - [NodeJS](backend/nodejs/index)
      - [EventEmitter](backend/nodejs/event-emitter)
      - [File System](backend/nodejs/file-system)
"/>
