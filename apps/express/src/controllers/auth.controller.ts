import bcrypt from "bcryptjs"
import { type RequestHandler } from "express"
import { UserModel, type UserSchemaType } from "../models/user.model"
export const registerUser: RequestHandler<
  null,
  {
    message: string
    success: boolean
  },
  UserSchemaType
> = async (req, res): Promise<void> => {
  try {
    const { username, password, email, role } = req.body
    const checkExistingUser = await UserModel.findOne({
      $or: [
        {
          username,
        },
        {
          email,
        },
      ],
    })
    if (checkExistingUser) {
      return void res.status(400).json({
        success: false,
        message: "user is existed",
      })
    }
    // password handle
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    // create a user
    const newlyUser = await UserModel.create({
      username,
      password: hashedPassword,
      email,
      role,
    })
    if (newlyUser) {
      return void res.status(201).json({
        success: true,
        message: `create user successful ${newlyUser.username}`,
      })
    }
    return void res.status(400).json({
      success: false,
      message: `create user have some errors`,
    })
  } catch (error) {
    return void res.status(500).json({
      message: error as string,
      success: false,
    })
  }
}
export const loginUser: RequestHandler = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      message: error,
    })
  }
}
