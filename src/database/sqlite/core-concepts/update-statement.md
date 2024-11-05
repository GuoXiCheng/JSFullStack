# Update 语句

Update 语句用于更新数据库表中的数据。

可以使用带有 WHERE 子句的 Update 语句来更新特定的行，否则所有行都会被更新。

## 更新所有行

::: code-group

```sql [语法]
UPDATE TABLE_NAME
SET column1 = value1, column2 = value2, ...
```

```sql [实例]
UPDATE customers
SET first_name = 'Jane', last_name = 'Doe';
```

:::

## 更新指定行

::: code-group

```sql [语法]
UPDATE TABLE_NAME
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

```sql [实例]
UPDATE customers
SET first_name = 'Jane', last_name = 'Doe'
WHERE id = 1;
```

:::
