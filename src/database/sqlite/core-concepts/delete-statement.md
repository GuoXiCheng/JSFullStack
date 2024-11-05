# Delete 语句

Delete 语句用于删除表中已有的记录。

可以使用带有 Where 子句的 Delete 语句删除选定的行，否则所有记录都会被删除。

## 删除所有行

::: code-group

```sql [语法]
DELETE FROM TABLE_NAME;
```

```sql [实例]
DELETE FROM customers;
```

:::

## 删除指定行

::: code-group

```sql [语法]
DELETE FROM TABLE_NAME
WHERE condition;
```

```sql [实例]
DELETE FROM customers
WHERE id = 1;
```

:::
