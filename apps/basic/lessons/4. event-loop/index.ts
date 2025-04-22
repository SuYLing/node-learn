// main > micro > macro
// mirco
//    1. Promise.resolve
//    2. process.nextTick
// macro
//    1. setTimeout
//    2. setImmediate
//    3. setInterval

import fs from "fs"
import path from "path"
fs.readFile(
  path.resolve(process.cwd(), "../3. http-module/index.ts"),
  (err, data) => {
    console.log(data.toString())
  }
)
console.log("1: start")

setTimeout(() => {
  console.log("2: time out 0s")
}, 0)

setImmediate(() => {
  console.log("3: setImmediate")
})
Promise.resolve().then(() => {
  console.log("4: promise resolve callback")
})
process.nextTick(() => {
  console.log("5: process nexttick")
})
console.log("6: end")
// 1: start
// 6: end
// 4: promise resolve callback
// 5: process nexttick
// 3: setImmediate
// 2: time out 0s
