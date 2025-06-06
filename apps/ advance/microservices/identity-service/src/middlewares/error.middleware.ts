import { type ErrorRequestHandler } from "express"
import logger from "../utils/logger"
export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  logger.error(err.stack)
  res.status(err.status || 500).json({
    message: err.message || "Internal server error",
  })
}
