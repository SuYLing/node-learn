import mongoose from "mongoose"

export const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("connected Mongo  successful!")
  } catch (err) {
    console.log("some error at connecting to mongo: ", err)
  }
}
