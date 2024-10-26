# 数据表操作

## 创建表

::: code-group

```sql [语法]
create table database_name.table_name (
    column1 datatype primary key(one or more columns),
    column2 datatype,
    ...
    columnN datatype
)
```

```sql [实例]
create table company (
    id integer primary key not null,
    username text not null,
    age integer not null,
    salary real
)
```

:::

## 查看表

使用`.tables`命令查看数据库中的所有表。

```bash
sqlite> .tables
company  users
```

使用`.schema`命令查看表的结构。

```bash
sqlite> .schema company
CREATE TABLE company (
    id integer primary key not null,
    username text not null,
    age integer not null,
    salary real
);
```

## 修改表

### 添加列

::: code-group

```sql [语法]
alter table database_name.table_name add column_name datatype;
```

```sql [实例]
alter table company add email text
```

:::

### 重命名列

::: code-group

```sql [语法]
alter table database_name.table_name rename column_name to new_column_name;
```

```sql [实例]
alter table company rename username to name;
```

:::

### 删除列

::: code-group

```sql [语法]
alter table database_name.table_name drop column column_name;
```

```sql [实例]
alter table company drop column email;
```

:::

## 删除表

::: code-group

```sql [语法]
drop table database_name.table_name
```

```sql [实例]
drop table company;
```

:::
