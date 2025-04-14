import { Router } from "express"
import { createBook, getAllBooks } from "../../controllers/books.controller"

const booksRoute = Router()

booksRoute.get("/", getAllBooks)
booksRoute.post("/add", createBook)
export default booksRoute
