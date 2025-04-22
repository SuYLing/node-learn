import { RequestHandler, type ErrorRequestHandler } from "express"
export default class APIError extends Error {
  public statusCode: number = 0
  public message: string = ""
  public name: string = ""
  constructor(message: string, statusCode: number) {
    super(message)
    this.name = "APIError"
    this.statusCode = statusCode
  }
}

export const asyncHander: (fn: RequestHandler) => RequestHandler =
  (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next)
  }
export const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err.stack)
  if (err instanceof APIError) {
    return void res.status(err.statusCode).json({
      status: "Error",
      message: err.message,
    })
  } else if (err.name === "validationError") {
    return void res.status(400).json({
      status: "error",
      message: "vaildation Error",
    })
  } else {
    return void res.status(500).json({
      status: "error",
      message: "An unexpected error occured",
    })
  }
}
