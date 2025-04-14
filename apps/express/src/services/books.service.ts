import Book from "../models/books"

export const getBooks = async () => {
  const books = await Book.find()
  return books
}

export const createNewBook = async (book: { title: string }) => {
  console.log(book)
  const newlyCreatedBook = await Book.create(book)
  if (newlyCreatedBook) {
    return {
      message: "create book successful",
      data: newlyCreatedBook,
    }
  }
  return {
    message: "create book error",
  }
}
