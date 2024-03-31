# Date

## 创建日期对象

```js
const date = new Date();
```

## 常用方法

<table>
    <thead>
        <tr>
        <th>方法</th>
        <th>描述</th>
        <th>示例</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td><code>new Date()</code></td>
        <td>获取日期对象</td>
        <td>{{new Date()}}</td>
        </tr>
        <tr>
        <td><code>getFullYear()</code></td>
        <td>获取四位数的年份</td>
        <td>{{currentDate.getFullYear()}}</td>
        </tr>
        <tr>
        <td><code>getMonth()</code></td>
        <td>获取月份（0-11，0代表一月，11代表十二月）</td>
        <td>{{currentDate.getMonth()}}</td>
        </tr>
        <tr>
        <td><code>getDate()</code></td>
        <td>获取月份中的日（1-31）</td>
        <td>{{currentDate.getDate()}}</td>
        </tr>
        <tr>
        <td><code>getDay()</code></td>
        <td>获取星期几（0-6，0代表星期日，6代表星期六）</td>
        <td>{{currentDate.getDay()}}</td>
        </tr>
        <tr>
        <td><code>getHours()</code></td>
        <td>获取小时数（0-23）</td>
        <td>{{currentDate.getHours()}}</td>
        </tr>
        <tr>
        <td><code>getMinutes()</code></td>
        <td>获取分钟数（0-59）</td>
        <td>{{currentDate.getMinutes()}}</td>
        </tr>
        <tr>
        <td><code>getSeconds()</code></td>
        <td>获取秒数（0-59）</td>
        <td>{{currentDate.getSeconds()}}</td>
        </tr>
        <tr>
        <td><code>getMilliseconds()</code></td>
        <td>获取毫秒数（0-999）</td>
        <td>{{currentDate.getMilliseconds()}}</td>
        </tr>
        <tr>
        <td><code>getTime()</code></td>
        <td>获取自1970年1月1日以来的毫秒数</td>
        <td>{{currentDate.getTime()}}</td>
        </tr>
        <tr>
        <td><code>Date.now()</code></td>
        <td>返回当前时间的毫秒数</td>
        <td>{{Date.now()}}</td>
        </tr>
        <tr>
        <td><code>toDateString()</code></td>
        <td>将日期部分转换为易读格式，不包括时间</td>
        <td>{{currentDate.toDateString()}}</td>
        </tr>
        <tr>
        <td><code>toTimeString()</code></td>
        <td>将时间部分转换为易读格式</td>
        <td>{{currentDate.toTimeString()}}</td>
        </tr>
        <tr>
        <td><code>toLocaleDateString()</code></td>
        <td>根据本地时间格式，返回日期部分的字符串</td>
        <td>{{currentDate.toLocaleDateString()}}</td>
        </tr>
        <tr>
        <td><code>toLocaleTimeString()</code></td>
        <td>根据本地时间格式，返回时间部分的字符串</td>
        <td>{{currentDate.toLocaleTimeString()}}</td>
        </tr>
        <tr>
        <td><code>toLocaleString()</code></td>
        <td>根据本地时间格式，返回日期和时间的字符串</td>
        <td>{{currentDate.toLocaleString()}}</td>
        </tr>
        <tr>
        <td><code>toISOString()</code></td>
        <td>以ISO格式返回字符串</td>
        <td>{{currentDate.toISOString()}}</td>
        </tr>
        <tr>
        <td><code>toJSON()</code></td>
        <td>以JSON格式返回日期字符串</td>
        <td>{{currentDate.toJSON()}}</td>
        </tr>
        <tr>
        <td><code>toString()</code></td>
        <td>将日期转换为完整的字符串表示</td>
        <td>{{currentDate.toString()}}</td>
        </tr>
        <tr>
        <td><code>toUTCString()</code></td>
        <td>将日期转换为UTC格式的字符串</td>
        <td>{{currentDate.toUTCString()}}</td>
        </tr>
        <tr>
        <td><code>valueOf()</code></td>
        <td>返回日期对象的原始值，即自1970年1月1日以来的毫秒数</td>
        <td>{{currentDate.valueOf()}}</td>
        </tr>
    </tbody>
</table>


<script>
export default {
  data() {
    return {
      currentDate: new Date(),
    };
  },
};
</script>