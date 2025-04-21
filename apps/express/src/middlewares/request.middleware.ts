import chalk from "chalk"
import { RequestHandler } from "express"
export const requestLooger: RequestHandler = (req, res, next) => {
  const timeStamp = new Date().toISOString()
  const { url, method } = req
  const userAgent = req.get("User-Agent")
  console.log(
    chalk.green(`${timeStamp}    ${userAgent}     ${url}      ${method}`)
  )
  next()
}
