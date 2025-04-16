import { Router } from "express"
import authRouter from "./modules/auth.routes"
import booksRoute from "./modules/books.route"
import homeRouter from "./modules/index.routes"
import userRoutes from "./modules/user.routes"

const router = Router()

router.use("/", homeRouter)
router.use("/user", userRoutes)
router.use("/books", booksRoute)
router.use("/auth", authRouter)
export default router
