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
      - [动态组件标识符](frontend/react/dynamic-component-identifier)
      - [React 严格模式](frontend/react/strict-mode)
      - [memo](frontend/react/memo)
      - 核心概念
        - [JSX语法](frontend/react/core-concepts/jsx)
        - [children](frontend/react/core-concepts/children)
        - [createPortal](frontend/react/core-concepts/create-portal)
        - styles
          - [内联样式](frontend/react/core-concepts/styles/inline-style)
          - [外部样式](frontend/react/core-concepts/styles/external-style)
          - [CSS Modules](frontend/react/core-concepts/styles/css-modules)
          - [Styled Components](frontend/react/core-concepts/styles/styled-components)
          - [Tailwind CSS](frontend/react/core-concepts/styles/tailwind-css)
        - 状态管理
          - [state](frontend/react/core-concepts/state-management/state)
          - [props](frontend/react/core-concepts/state-management/props)
          - [状态提升](frontend/react/core-concepts/state-management/lifting-state-up)
          - [Context](frontend/react/core-concepts/state-management/context)
          - [Reducer 和 Context](frontend/react/core-concepts/state-management/reducer-and-context)
      - Hook API
        - [useRef](frontend/react/hook-api/use-ref)
        - [useImperativeHandle](frontend/react/hook-api/use-imperative-handle)
        - [useEffect](frontend/react/hook-api/use-effect)
        - [useCallback](frontend/react/hook-api/use-callback)
        - [useMemo](frontend/react/hook-api/use-memo)
        - [useContext](frontend/react/hook-api/use-context)
        - [自定义 Hook](frontend/react/hook-api/custom-hook)
      - React Redux
        - [Redux 核心概念](frontend/react/react-redux/redux-core-concept)
        - [Redux Toolkit](frontend/react/react-redux/redux-toolkit)
      - 表单
        - [受控组件](frontend/react/form/controlled)
        - [非受控组件](frontend/react/form/uncontrolled)
        - [FormData](frontend/react/form/form-data)
  - 后端
    - [NodeJS](backend/nodejs/index)
      - [EventEmitter](backend/nodejs/event-emitter)
      - [File System](backend/nodejs/file-system)
  - AI
    - [OpenAI API](artificial-intelligence/openai-api)
    - [AI 专业术语](artificial-intelligence/ai-terminology)
"/>
