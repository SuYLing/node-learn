import express from "express"
import "./configs/env"
import { errorHandler } from "./middlewares/error.middleware"
import logger from "./utils/logger"
const app = express()
const port = process.env.PORT
app.use(errorHandler)

app.listen(port, () => {
  logger.log("info", `server on http://127.0.0.1:${port}`)
})
