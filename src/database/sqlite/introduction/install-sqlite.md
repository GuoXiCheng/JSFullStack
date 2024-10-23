# 安装 SQLite

## 在 Windows 上安装 SQLite

访问 SQLite 的[下载页面](https://www.sqlite.org/download.html)，从 _Precompiled Binaries for Windows_ 下载适用于 Windows 的预编译二进制文件：_sqlite-dll-win-x64-xxx0000.zip_ 和 _sqlite-tools-win-x64-xxx0000.zip_

创建文件夹 `C:\sqlite`，并将下载的两个文件解压到该文件夹。

添加 `C:\sqlite` 到 `PATH` 环境变量

打开命令提示符，输入 `sqlite3`，如果看到以下输出，则说明安装成功：

```bash
C:\sqlite>sqlite3
SQLite version 3.47.0 2024-10-21 16:30:22
Enter ".help" for usage hints.
Connected to a transient in-memory database.
Use ".open FILENAME" to reopen on a persistent database.
```

继续输入命令 `.open test.db` 可以创建一个数据库文件。

输入 `.quit` 退出 SQLite 命令行。
