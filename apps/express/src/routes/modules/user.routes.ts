import { Router } from "express"
import { getUserById } from "../../controllers/user.controller"

const userRoutes = Router()

userRoutes.get("/:id", getUserById)

export default userRoutes
