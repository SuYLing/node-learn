import mongoose, { type InferSchemaType } from "mongoose"

const ImageSchame = new mongoose.Schema({
  url: {
    required: true,
    type: String,
  },
  publicId: {
    required: true,
    type: String,
  },
  uploadedBy: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
  },
})

export default mongoose.model("Image", ImageSchame)

export type ImageSchameType = InferSchemaType<typeof ImageSchame>
