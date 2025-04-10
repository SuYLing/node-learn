import express from "express"
import router from "./routes"
const app = express()

app.use("/", router)

app.listen(3000, (err) => {
  if (err) {
    throw err.message
  }
  console.log("server on http://127.0.0.1:3000")
})
