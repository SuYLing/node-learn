import { Router } from "express"
import { uploadImage } from "../../controllers/image.controller"
import { checkAuth } from "../../middlewares/jwt.middleware"
import uploadMiddleware from "../../middlewares/upload.middleware"

const uploadRouter = Router()

uploadRouter.post("/", checkAuth, uploadMiddleware.single("image"), uploadImage)

export default uploadRouter
