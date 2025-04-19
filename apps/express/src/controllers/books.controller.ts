import { RequestHandler } from "express"
import { createNewBook, getBooks } from "../services/books.service"
export const getAllBooks: RequestHandler = async (req, res) => {
  res.status(200).json({
    data: await getBooks(),
  })
}
export const createBook: RequestHandler = async (req, res) => {
  if (req.body) {
    const resMes = await createNewBook(req.body)
    res.status(201).json(resMes)
  } else {
    res.status(500).json({
      message: "err",
    })
  }
}
