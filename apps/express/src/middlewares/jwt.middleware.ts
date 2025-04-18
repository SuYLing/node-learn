import type { Handler } from "express"
import type { UserSchemaType } from "../models/user.model"
import { verifyToken } from "../utils/jwt"

export const checkAuth: Handler = (req, res, next) => {
  const { authorization } = req.headers
  if (!authorization) {
    return void res.status(500).json({
      success: false,
      message: "please login at first!",
    })
  } else {
    console.log(authorization)
    try {
      const playload = verifyToken(authorization) as {
        role: UserSchemaType["role"]
      }
      console.log(playload)
      if (playload.role === "admin") {
        return next()
      } else {
        return void res.status(500).json({
          success: false,
          message: "no auth",
        })
      }
    } catch (error) {
      return void res.status(500).json({
        success: false,
        message: "token verify error:"+ error,
      })
    }
  }
}
