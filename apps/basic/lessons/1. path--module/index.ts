import path from "path"
// 文件后缀名
console.log('pathname',path.extname('/foo/bar/baz/asdf/quux.html'))
// 拼接路径
console.log('path',path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'))
// 解析路径 前面没有/表示绝对路径，会找到根目录 /root/basic/node-learn/apps/basic/lessons/1. path--module/foo/bar/baz/asdf
console.log('path',path.resolve('foo', 'bar', 'baz/asdf', 'quux', '..'))
// 解析路径 前面有/表示相对路径，会找到当前目录 /foo/bar/baz/asdf
console.log('path',path.resolve('/foo', 'bar', 'baz/asdf', 'quux', '..'))
