# Date

## 创建日期对象

```js
const date = new Date();
```

## 常用方法

| 方法                            | 描述                                                               |
| ------------------------------- | ------------------------------------------------------------------ |
| `getDate()`                     | 返回日期对象中的日（1-31）                                         |
| `getDay()`                      | 返回星期几（0-6，0表示周日，6表示周六）                            |
| `getMonth()`                    | 返回月份（0-11，0表示一月，11表示十二月）                          |
| `getFullYear()`                 | 返回四位数年份                                                     |
| `getHours()`                    | 返回小时（0-23）                                                   |
| `getMinutes()`                  | 返回分钟（0-59）                                                   |
| `getSeconds()`                  | 返回秒数（0-59）                                                   |
| `getMilliseconds()`             | 返回毫秒（0-999）                                                  |
| `getTime()`                     | 返回自1970年1月1日以来的毫秒数                                     |
| `setDate(date)`                 | 设置日期对象的日（如果date大于该月天数，则加月）                   |
| `setMonth(month)`               | 设置日期对象的月份（month为大于0的数值，大于11加年）               |
| `setFullYear(year)`             | 设置日期对象的年份（设置日期的年（year必须是4位数）                |
| `setHours(hour)`                | 设置日期对象的小时（如果hours大于23，则加日）                      |
| `setMinutes(minutes)`           | 设置日期对象的分钟（如果minutes大于59，则加时）                    |
| `setSeconds(seconds)`           | 设置日期对象的秒数（如果seconds大于59，则加分）                    |
| `setMilliseconds(milliseconds)` | 设置日期对象的毫秒数                                               |
| `setTime(milliseconds)`         | 以毫秒为单位设置日期对象的时间，修改整个日期                       |
| `Date.now()`                    | 返回当前时间的毫秒数（例：1710120399964）                          |
| `toDateString()`                | 将日期部分转换为易读格式，不包括时间（例：Mon Mar 11 2024）        |
| `toISOString()`                 | 返回一个ISO格式的字符串（例：2024-03-11T01:41:54.770Z）            |
| `toLocaleDateString()`          | 根据本地时间格式，返回日期部分的字符串（例：2024/3/11）            |
| `toLocaleTimeString()`          | 根据本地时间格式，返回时间部分的字符串（例：09:42:45）             |
| `toLocaleString()`              | 根据本地时间格式，返回日期和时间的字符串（例：2024/3/11 09:43:05） |

<<< @/../projects/javascript-sandbox/src/date.js