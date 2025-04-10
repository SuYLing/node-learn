import { Router } from "express"
import homeRouter from "./modules/index.routes"
import userRoutes from "./modules/user.routes"

const router = Router()

router.use("/", homeRouter)
router.use("/user", userRoutes)

export default router
