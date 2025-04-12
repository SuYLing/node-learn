import express from "express"
import "./config/env"
import "./databases/mongo"
import router from "./routes"
const app = express()
app.use("/", router)

const PORT = process.env.PORT
app.listen(PORT, (err) => {
  if (err) throw err.message
  console.log(`server is running on http://127.0.0.1:${PORT}`)
})
