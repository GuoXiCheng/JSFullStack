# Select 语句

## 基本语法

::: code-group

```sql [语法]
SELECT column1, column2, ...
FROM table_name;
```

```sql [实例]
SELECT name, age
FROM students;
```

:::

## Where 子句

### 比较

::: code-group

```sql [大于]
select * from students where age > 20;
```

```sql [小于]
select * from students where age < 20;
```

```sql [大于等于]
select * from students where age >= 20;
```

```sql [小于等于]
select * from students where age <= 20;
```

```sql [等于]
select * from students where age = 20;
```

```sql [不等于]
select * from students where age != 20;
```

:::

### 逻辑

::: code-group

```sql [AND]
select * from students where age > 20 and name = 'John';
```

```sql [OR]
select * from students where age > 20 or name = 'John';
```

```sql [NOT]
select * from students where not age > 20;
```

:::

### IN

::: code-group

```sql [IN]
select * from students where age in (20, 21, 22);
```

```sql [NOT IN]
select * from students where age not in (20, 21, 22);
```

:::

### Between And

::: code-group

```sql [BETWEEN]
select * from students where age between 20 and 30;
```

```sql [NOT BETWEEN]
select * from students where age not between 20 and 30;
```

:::

### Exists

::: code-group

```sql [EXISTS]
select * from students where exists (
    select * from teachers where students.teacher_id = teachers.id
);
```

```sql [NOT EXISTS]
select * from students where not exists (
    select * from teachers where students.teacher_id = teachers.id
);
```

:::

### Is Null

::: code-group

```sql [IS NULL]
select * from students where name is null;
```

```sql [IS NOT NULL]
select * from students where name is not null;
```

:::

## Like 子句

Like 用来匹配通配符指定模式的文本值。

Like 通常与两个通配符一起使用：

- 百分号（%）：代表零个、一个或多个字符。
- 下划线（\_）：代表一个单一的字符。

::: code-group

```sql [LIKE]
select * from students where name like 'J%';
```

```sql [NOT LIKE]
select * from students where name not like 'J%';
```

```sql [LIKE]
select * from students where name like 'J_n';
```

```sql [NOT LIKE]
select * from students where name not like 'J_n';
```

:::

| 语句                        | 描述                                |
| --------------------------- | ----------------------------------- |
| `WHERE SALARY LIKE '200%'`  | 查找以 200 开头的任意值             |
| `WHERE SALARY LIKE '%200'`  | 查找以 200 结尾的任意值             |
| `WHERE SALARY LIKE '%200%'` | 查找包含 200 的任意值               |
| `WHERE SALARY LIKE '_00%'`  | 查找第二位是 0，第三位是 0 的任意值 |
| `WHERE SALARY LIKE '2_%_%'` | 查找以 2 开头且长度至少为 3 的值    |
| `WHERE SALARY LIKE '2__'`   | 查找以 2 开头且长度为 3 的值        |
| `WHERE SALARY LIKE '2%5'`   | 查找以 2 开头且以 5 结尾的值        |
| `WHERE SALARY LIKE '2___5'` | 查找以 2 开头且长度为 5 的值        |

## Glob 子句

GLOB 运算符用于匹配通配符指定模式的文本值。

::: tip
与 like 不同，GLOB 是大小写敏感的。
:::

GLOB 支持以下通配符，可以组合使用：

- `*`：代表零个、一个或多个数字或字符。
- `?`：代表一个单一的数字或字符。
- `[...]`：匹配方括号内指定的字符之一。例如，[abc] 匹配 "a"、"b" 或 "c" 中的任何一个字符。
- `[^...]`：匹配不在方括号内指定的字符之一。例如，[^abc] 匹配不是 "a"、"b" 或 "c" 中的任何一个字符的字符。

| 语句                        | 描述                                            |
| --------------------------- | ----------------------------------------------- |
| `WHERE SALARY GLOB '200*'`  | 查找以 200 开头的任意值                         |
| `WHERE SALARY GLOB '*200*'` | 查找任意位置包含 200 的任意值                   |
| `WHERE SALARY GLOB '?00*'`  | 查找第二位和第三位为 00 的任意值                |
| `WHERE SALARY GLOB '2??'`   | 查找以 2 开头，且长度为 3 个字符的任意值        |
| `WHERE SALARY GLOB '*2'`    | 查找以 2 结尾的任意值                           |
| `WHERE SALARY GLOB '?2*3'`  | 查找第二位为 2，且以 3 结尾的任意值             |
| `WHERE SALARY GLOB '2???3'` | 查找长度为 5 位数，且以 2 开头以 3 结尾的任意值 |

## Limit 子句

Limit 子句用于限制查询返回的行数。

::: code-group

```sql [语法]
SELECT column1, column2, ... FROM table_name LIMIT [number of rows];
```

```sql [实例]
SELECT name, age FROM students LIMIT 10;
```

:::

Limit 子句与 Offset 子句一起使用，可以跳过指定数量（offset）的行，然后从下一行开始，返回剩余数量（limit）的行。

::: code-group

```sql [语法]
SELECT column1, column2, ... FROM table_name
LIMIT [number of rows] OFFSET [offset];
```

```sql [实例]
SELECT name, age FROM students LIMIT 10 OFFSET 10;
```

:::

## Order By 子句

Order By 子句用于对查询结果进行排序。

::: code-group

```sql [语法]
SELECT column1, column2, ... FROM table_name
ORDER BY [column1, column2, ...] [ASC | DESC];
```

```sql [实例]
SELECT name, age FROM students ORDER BY age DESC;
```

:::
