import path from "path"
import { fileURLToPath } from "url"

// esm 模式下，不存在直接的 __filename, __dirname，需要通过下面的方式获取, 或者直接在meta信息中拿到 node version > 20.6
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log("pathname: ", path.basename(__filename))
console.log("directory name: ", import.meta.dirname)
// 文件后缀名
console.log("pathname", path.extname("/foo/bar/baz/asdf/quux.html"))
// 拼接路径
console.log("path", path.join("/foo", "bar", "baz/asdf", "quux", ".."))
// 解析路径 前面没有/表示绝对路径，会找到根目录 /root/basic/node-learn/apps/basic/lessons/1. path--module/foo/bar/baz/asdf
console.log("path", path.resolve("foo", "bar", "baz/asdf", "quux", ".."))
// 解析路径 前面有/表示相对路径，会找到当前目录 /foo/bar/baz/asdf
console.log("path", path.resolve("/foo", "bar", "baz/asdf", "quux", ".."))

console.log("normalize",path.normalize("/user/.test/../index.ts"))