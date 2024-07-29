# 文件状态

## 获取文件状态

<<< @/../projects/javascript-sandbox/src/file-system/stat.ts#stat

## 文件状态对象

| 属性/方法       | 返回值类型 | 描述                  |
| --------------- | ---------- | --------------------- |
| `size`          | number     | 获取文件大小（bytes） |
| `mode`          | number     | 获取文件权限          |
| `atime`         | Date       | 获取文件访问时间      |
| `mtime`         | Date       | 获取文件修改时间      |
| `ctime`         | Date       | 获取文件状态改变时间  |
| `birthtime`     | Date       | 获取文件创建时间      |
| `isFile()`      | boolean    | 判断是否为文件        |
| `isDirectory()` | boolean    | 判断是否为目录        |
