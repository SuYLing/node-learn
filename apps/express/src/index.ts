import express from "express"
import path from "path"
import "./config/env"
import "./databases/mongo"
import { connectToMongo } from "./databases/mongo"
import { globalErrorHandler } from "./middlewares/error.middleware"
import { requestLooger } from "./middlewares/request.middleware"
import router from "./routes"
// get some variables from env
const PORT = process.env.PORT

// create a root application
const app = express()

// set view engine
app.set("view engine", "ejs")
app.set("views", path.join(import.meta.dirname, "views"))
app.use(requestLooger)
// use middleware
app.use(express.json())
app.use(globalErrorHandler)
// connent to database
connectToMongo()
// register routes
app.use("/", router)
app.use(express.static("public"))
// listen server
app.listen(PORT, (err) => {
  if (err) throw err.message
  console.log(`server is running on http://127.0.0.1:${PORT}`)
})
