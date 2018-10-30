# 同步创建多级文件夹（Create multi-level files synchronously）
## 安装
```javascript
npm install make-multiple-dir --save
```
## 使用方法
```javascript
let makeDir = require('make-multiple-dir')
makeDir('a/b/c', {
  cwd: '/Users/yourname/test/'// 此文件夹必须存在
})
```


## 版本 v1.0.* 参数详解
#### `Arg[0] {String} `
```
必填
文件夹相对路径
```
#### `Arg[1] {Object} `
```
非必填
Arg[1].cwd 目标路径
若填写，此路径必须存在
若不填写，生成的文件夹为当前执行环境
```