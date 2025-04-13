import express from "express"
import "./config/env"
import "./databases/mongo"
import { connectToMongo } from "./databases/mongo"
import router from "./routes"

// get some variables from env
const PORT = process.env.PORT

// create a root application
const app = express()
// register routes
app.use("/", router)
// use middleware
app.use(express.json())
// connent to database
connectToMongo()

// listen server
app.listen(PORT, (err) => {
  if (err) throw err.message
  console.log(`server is running on http://127.0.0.1:${PORT}`)
})
