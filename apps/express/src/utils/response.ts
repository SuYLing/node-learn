import { Response } from "express"
import type { ApiResponse } from "../types/response"
export const sendRes = <T = undefined>(
  res: Response,
  status: number,
  playload: ApiResponse<T>
) => {
  return res.status(status).json(playload)
}
