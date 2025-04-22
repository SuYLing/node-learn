import { Router } from "express"
import { createBook, getAllBooks } from "../../controllers/books.controller"
import { asyncHander } from "../../middlewares/error.middleware"
import { checkAuth } from "../../middlewares/jwt.middleware"

const booksRoute = Router()

booksRoute.get("/", checkAuth, asyncHander(getAllBooks))
booksRoute.post("/add", checkAuth, asyncHander(createBook))
export default booksRoute
