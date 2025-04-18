import { Router } from "express"
import { createBook, getAllBooks } from "../../controllers/books.controller"
import { checkAuth } from "../../middlewares/jwt.middleware"

const booksRoute = Router()

booksRoute.get("/", checkAuth, getAllBooks)
booksRoute.post("/add", checkAuth, createBook)
export default booksRoute
