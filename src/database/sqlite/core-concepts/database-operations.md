# 数据库操作

在命令行中输入`sqlite3`命令，进入 sqlite3 的命令行模式。

在命令行中输入`.quit`命令，退出 sqlite3 的命令行模式。

## 创建数据库

使用 `.open` 命令创建一个数据库文件，如果文件不存在则会创建一个新的数据库文件，如果文件已经存在则会打开该数据库文件。

```bash
sqlite> .open test.db
```

## 检查数据库

使用 `.databases` 命令查看当前打开的数据库文件。

```bash
sqlite> .databases
main: C:\sqlite\test.db r/w
```
