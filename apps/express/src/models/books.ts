import mongoose from "mongoose"

const booksSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "book title is required"],
    trim: true,
  },
})

export default mongoose.model("Book", booksSchema)
