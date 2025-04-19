import "express"
import type { UserSchemaType } from "../models/user.model"

declare global {
  namespace Express {
    export interface Request {
      user: {
        role: UserSchemaType["role"]
        userId: string
      }
    }
  }
}
