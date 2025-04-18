import jwt from "jsonwebtoken"
import type { UserSchemaType } from "../models/user.model"
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

export const generateToken = (playload: {
  userId: string
  role: UserSchemaType["role"]
}) => {
  return jwt.sign(playload, JWT_SECRET_KEY, {
    expiresIn: '1d',
  })
}
export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET_KEY)
}
