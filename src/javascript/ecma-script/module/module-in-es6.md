# ES6 中的模块

## 模块标签

支持 ES6 模块的浏览器会将 `type="module"` 的脚本标签当作模块处理，并且会忽略带有 `nomodule` 属性的脚本标签。

```html
<!-- 支持模块的浏览器执行 -->
<script type="module" src="module.js"></script>

<!-- 不支持模块的浏览器执行 -->
<script nomodule src="script.js"></script>
```

## 模块的导入导出

### 命名导出

::: code-group
<<< @/../projects/javascript-sandbox/src/module/es6-export.ts#named-export [导出]

<<< @/../projects/javascript-sandbox/src/module/es6-import.ts#import-named [导入]
:::

### 默认导出

::: code-group

<<< @/../projects/javascript-sandbox/src/module/es6-export.ts#export-default [导出]

<<< @/../projects/javascript-sandbox/src/module/es6-import.ts#import-default [导入]

:::

### 批量导出

::: code-group

<<< @/../projects/javascript-sandbox/src/module/es6-export.ts#bulk-export [导出]

<<< @/../projects/javascript-sandbox/src/module/es6-import.ts#import-bulk [导入]

:::

### 重命名导出

::: code-group

<<< @/../projects/javascript-sandbox/src/module/es6-export.ts#rename-export [导出]

<<< @/../projects/javascript-sandbox/src/module/es6-import.ts#rename-import [导入]

:::

### 动态导入

::: code-group

<<< @/../projects/javascript-sandbox/src/module/es6-export.ts#dynamic-export [导出]

<<< @/../projects/javascript-sandbox/src/module/es6-import.ts#dynamic-import [导入]

:::
