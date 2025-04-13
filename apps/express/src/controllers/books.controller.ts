import { RequestHandler } from "express"
export const getAllBoos: RequestHandler = async (req, res) => {
  res.status(200).json({
    data: [],
  })
}
