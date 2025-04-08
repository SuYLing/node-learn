import fs from "fs"
import path from "path"
const dataFolder = path.resolve(import.meta.dirname, "data")
// 创建文件夹
if (!fs.existsSync(dataFolder)) {
  fs.mkdir(dataFolder, (err) => {
    if (!err) {
      console.log("create " + dataFolder + " successful")
    }
  })
}
// 创建文件
fs.writeFile(`${dataFolder}/test.txt`, "hello node.js", (err) => {
  if (!err) {
    console.log("write successfullyß")
  }
})

// 读取文件
fs.readFile(`${dataFolder}/test.txt`, "utf-8", (err, data) => {
  if (err) {
    throw err
  }
  console.log(data)
})

// 写入文件【添加】
fs.appendFile(`${dataFolder}/test.txt`,"\n 1213131",(err)=>{
  if(!err){
    console.log('write successfullyß')
  }
})