import { Router } from "express"
import { helloExpress } from "../../controllers/index.controller"

const router = Router()
router.get("/", helloExpress)
export default router
