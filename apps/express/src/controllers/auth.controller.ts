import bcrypt from "bcryptjs"
import { type RequestHandler } from "express"
import { UserModel, type UserSchemaType } from "../models/user.model"
import { generateToken } from "../utils/jwt"
import { sendRes } from "../utils/response"
type ApiResponse = {
  message: string
  success: boolean
}
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
      return void sendRes(res, 400, {
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
      return void sendRes<{
        username: string
      }>(res, 201, {
        success: true,
        message: "create user successful",
        data: {
          username: newlyUser.username,
        },
      })
    }
    return void sendRes(res, 400, {
      success: false,
      message: `create user have some errors`,
    })
  } catch (error) {
    return void sendRes(res, 500, {
      message: error as string,
      success: false,
    })
  }
}
export const loginUser: RequestHandler<
  null,
  {
    message: string
    success: boolean
  },
  Pick<UserSchemaType, "username" | "password">
> = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await UserModel.findOne({
      username,
    })
    if (!user) {
      return void sendRes(res, 400, {
        success: false,
        message: "user not exits",
      })
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
      return void sendRes(res, 400, {
        success: false,
        message: "password not right",
      })
    }
    const accessToken = generateToken({
      userId: user._id,
      role: user.role,
    })
    return void sendRes(res, 200, {
      success: true,
      message: "login success",
      data: {
        accessToken,
      },
    })
  } catch (error) {
    return void sendRes(res, 500, {
      success: false,
      message: error as string,
    })
  }
}
