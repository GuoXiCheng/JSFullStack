# File System

## 编写方式

### Synchronous 
同步API会阻塞事件循环，直到操作完成或失败。

通常用于启动阶段加载配置，或者在不影响主应用流程的特定场景中使用。
```js
import { readFileSync } from 'node:fs';

const result = readFileSync('data.txt');
console.log(result);
```

### Callback
回调可以避免阻塞事件循环，但是可能会导致回调地狱。
```js
import { readFile } from 'node:fs';

readFile('data.txt', (err, data) => {
    if (err) console.error(err);

    console.log(data);
});
```

### Promise
Promise可以避免阻塞事件循环同时避免回调地狱。可以写出近乎同步的代码风格，提升可读性。
```js
import { readFile } from 'node:fs/promises';

(async () => {
    const result = await readFile('data.txt');
    console.log(result);
})();
```

## 文件系统标志

| 标志    | 描述                                                               |
| ------- | ------------------------------------------------------------------ |
| `'a'`   | 打开文件用于追加。如果文件不存在，则创建该文件。                   |
| `'ax'`  | 与`'a'`相似，但如果路径存在，则失败。                              |
| `'a+'`  | 打开文件用于读取和追加。如果文件不存在，则创建该文件。             |
| `'ax+'` | 与`'a+'`相似，但如果路径存在，则失败。                             |
| `'as'`  | 打开文件以在同步模式下追加。 如果文件不存在，则创建该文件。        |
| `'as+'` | 打开文件以在同步模式下读取和追加。 如果文件不存在，则创建该文件。  |
| `'r'`   | 打开文件用于读取。如果文件不存在，则发生异常。                     |
| `'rs'`  | 打开文件以在同步模式下读取。 如果文件不存在，则会发生异常。        |
| `'r+'`  | 打开文件用于读写。如果文件不存在，则发生异常。                     |
| `'rs+'` | 打开文件以同步模式进行读写。用于跳过本地文件系统缓存。             |
| `'w'`   | 打开文件用于写入。文件被创建（如果它不存在）或截断（如果它存在）。 |
| `'wx'`  | 与`'w'`相似，但如果路径存在，则失败。                              |
| `'w+'`  | 打开文件用于读写。文件被创建（如果它不存在）或截断（如果它存在）。 |
| `'wx+'` | 与`'w+'`相似，但如果路径存在，则失败。                             |

## API 文档参考
- [Node.js File System Documentation](https://nodejs.org/docs/latest/api/fs.html)