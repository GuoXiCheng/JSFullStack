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
