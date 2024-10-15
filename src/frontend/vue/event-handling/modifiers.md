# 修饰符

## 事件修饰符

在处理事件时调用`event.preventDefault()`或`event.stopPropagation()`是非常常见的需求。但如果方法能更专注于数据逻辑而不用处理 DOM 事件细节会更好。

Vue 提供的事件修饰符解决了这一问题：

| 修饰符     | 说明                                   |
| ---------- | -------------------------------------- |
| `.stop`    | 阻止事件冒泡                           |
| `.prevent` | 阻止事件默认行为                       |
| `.capture` | 使用事件捕获模式                       |
| `.self`    | 只有当事件在该元素本身触发时才触发回调 |
| `.once`    | 事件只触发一次                         |
| `.passive` | 指示浏览器不要阻止事件的默认行为       |

::: tip

- 事件修饰符可以链式使用，但要注意顺序。例如：`@click.prevent.self` 会阻止元素及其子元素的所有点击事件的默认行为，`@click.self.prevent` 只会阻止元素本身的点击事件的默认行为。

- 不能同时使用 `.passive` 和 `.prevent` 修饰符，因为`.passive` 会告诉浏览器不要阻止事件的默认行为，而`.prevent` 会告诉浏览器阻止事件的默认行为。

:::

## 按键修饰符

Vue 允许在监听按键事件时添加按键修饰符。

```vue
<!-- 只有在 `key` 是 `Enter` 时调用 `submit()` -->
<input @keyup.enter="submit" />
```

或是直接使用`KeyboardEvent.key`暴露的按键名称作为修饰符，但需要使用 kebab-case 格式。

```vue
<!-- 只有在 `key` 是 `PageDown` 时调用 `onPageDown` -->
<input @keyup.page-down="onPageDown">
```

### 常用按键别名

| 修饰符    | 说明                     |
| --------- | ------------------------ |
| `.enter`  | 回车键                   |
| `.tab`    | Tab 键                   |
| `.delete` | Delete 键和 Backspace 键 |
| `.esc`    | ESC 键                   |
| `.space`  | 空格键                   |
| `.up`     | 上箭头键                 |
| `.down`   | 下箭头键                 |
| `.left`   | 左箭头键                 |
| `.right`  | 右箭头键                 |

### 系统按键修饰符

| 修饰符   | 说明     |
| -------- | -------- |
| `.ctrl`  | Ctrl 键  |
| `.alt`   | Alt 键   |
| `.shift` | Shift 键 |
| `.meta`  | Meta 键  |

```vue
<!-- Alt + Enter -->
<input @keyup.alt.enter="clear" />

<!-- Ctrl + 点击 -->
<div @click.ctrl="doSomething">Do something</div>
```

::: tip
系统按键修饰符与`keyup`事件结合使用时，该按键必须在事件发出时处于按下状态才会触发事件。

例如：`@keyup.ctrl`事件只有在按下 Ctrl 键的同时释放任意键时才会触发。
:::

### .exact 修饰符

`.exact` 修饰符允许精确控制触发事件所需的系统修饰符的组合。

```vue
<!-- 当按下 Ctrl 时，即使同时按下 Alt 或 Shift 也会触发 -->
<button @click.ctrl="onClick">A</button>

<!-- 仅当按下 Ctrl 且未按任何其他键时才会触发 -->
<button @click.ctrl.exact="onCtrlClick">A</button>

<!-- 仅当没有按下任何系统按键时触发 -->
<button @click.exact="onClick">A</button>
```

## 鼠标按键修饰符

| 修饰符    | 说明     |
| --------- | -------- |
| `.left`   | 鼠标左键 |
| `.right`  | 鼠标右键 |
| `.middle` | 鼠标中键 |

```vue
<template>
  <button @click.left="handleLeftClick">左键点击我</button>
</template>
```
