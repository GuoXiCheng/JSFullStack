# Insert 语句

## 为所有列插入值

::: code-group

```sql [语法]
INSERT INTO TABLE_NAME
VALUES (value1, value2, value3, ...);
```

```sql [实例]
INSERT INTO customers
VALUES (1, 'John', 'Doe', '2021-01-01 00:00:00', '2021-01-01 00:00:00');
```

:::

## 为指定列插入值

::: code-group

```sql [语法]
INSERT INTO TABLE_NAME (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
```

```sql [实例]
INSERT INTO customers (id, first_name, last_name, created_at, updated_at)
VALUES (1, 'John', 'Doe', '2021-01-01 00:00:00', '2021-01-01 00:00:00');
```

:::
