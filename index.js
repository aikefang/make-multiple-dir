const { existsSync, mkdirSync } = require('fs')
const { join, normalize, relative, resolve } = require('path')
let makeDirs = (dirname = './', options = {}) => {
  let { cwd = process.cwd() } = options
  //此处可去掉relative，只保留绝对路径，一般情况创建相对目录较多
  let rel = normalize(relative(cwd, resolve(cwd, dirname)))
  let paths = rel.split(/[\/\\\\]/)
  paths.reduce((base, el) => {
    let path = join(base, el)
    if (!existsSync(path)) {
      mkdirSync(path)
    }
    return path
  }, cwd)
  return dirname
}
module.exports = makeDirs