import argon2 from "argon2"
import mongoose, { type InferSchemaType } from "mongoose"
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    createAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
)
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    try {
      this.password = await argon2.hash(this.password)
    } catch (error) {
      return next(error)
    }
  }
})
userSchema.method(
  "comparePassword",
  async function (candidatePassword: string) {
    try {
      return await argon2.verify(this.password, candidatePassword)
    } catch (error) {
      throw error
    }
  }
)
userSchema.index({ username: "text" })
export type UserSchemaType = InferSchemaType<typeof userSchema>
export default mongoose.model("User", userSchema)
