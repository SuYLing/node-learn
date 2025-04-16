import mongoose, { type InferSchemaType } from "mongoose"

const booksSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "book title is required"],
    trim: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
})
export type BookSchemaType = InferSchemaType<typeof booksSchema>
const Book = mongoose.model("Book", booksSchema)
export default Book
