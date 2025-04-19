import jwt from "jsonwebtoken"
import type { UserSchemaType } from "../models/user.model"
import type mongoose from "mongoose"
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

export const generateToken = (playload: {
  userId: mongoose.Types.ObjectId
  role: UserSchemaType["role"]
}) => {
  return jwt.sign(playload, JWT_SECRET_KEY, {
    expiresIn: "1h",
  })
}
export const verifyToken = (token: string) => {
  try {
    // 使用 clockTolerance 来容忍时间差
    return jwt.verify(token, JWT_SECRET_KEY, {
      clockTolerance: 5, // 容忍5秒的时钟误差
    })
  } catch (error) {
    // 根据不同错误类型返回不同的错误消息
    if (error instanceof jwt.TokenExpiredError) {
      throw new Error("Token has expired")
    }
    if (error instanceof jwt.JsonWebTokenError) {
      throw new Error("Invalid token")
    }
    throw new Error("Token verification failed")
  }
}
