import type { RequestHandler } from "express"

export const helloExpress: RequestHandler = (req, res, next) => {
  res.send("hello express!")
}
