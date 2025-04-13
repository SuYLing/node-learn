import { Router } from "express"
import { getAllBoos } from "../../controllers/books.controller"

const booksRoute = Router()

booksRoute.get("/", getAllBoos)

export default booksRoute
