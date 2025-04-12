import mongoose from "mongoose"

mongoose
  .connect(process.env.MONGO_URL)
  .then((val) => {
    console.log("connected mongo successful: ", val)
  })
  .catch((err) => console.log(err))
