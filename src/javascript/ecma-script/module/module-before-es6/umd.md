# UMD

UMD（Universal Module Definition）是一种通用模块定义规范，它是为了统一 CommonJS 和 AMD 两种模块定义规范而设计的。

UMD 定义的模块会在启动时检测要使用哪个模块的系统，然后进行适当配置，并把所有逻辑包装在一个立即执行函数表达式中。

::: code-group

<<< @/../projects/javascript-sandbox/src/module/umd-module-demo.js [定义模块]

<<< @/../projects/javascript-sandbox/src/module/umd.js#umd [使用模块]

:::
