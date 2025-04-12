import dotenv from "dotenv"

const envFile = `.env.${process.env.NODE_ENV || "dev"}`
dotenv.config({
  path: envFile,
})
