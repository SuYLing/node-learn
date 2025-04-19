import type { RequestHandler } from "express"
import type { UserSchemaType } from "../models/user.model"
import { verifyToken } from "../utils/jwt"

export const checkAuth: RequestHandler = (req, res, next) => {
  const { authorization } = req.headers
  if (!authorization) {
    return void res.status(500).json({
      success: false,
      message: "please login at first!",
    })
  } else {
    try {
      const playload = verifyToken(authorization) as {
        role: UserSchemaType["role"]
        userId: string
      }
      console.log(playload, "playload")
      req.user = playload
      if (playload.role === "admin") {
        next()
      } else {
        return void res.status(500).json({
          success: false,
          message: "no auth",
        })
      }
    } catch (error) {
      return void res.status(500).json({
        success: false,
        message: "token verify error:" + error,
      })
    }
  }
}
