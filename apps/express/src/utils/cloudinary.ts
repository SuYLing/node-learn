import { v2 as cloudinary } from "cloudinary"
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export const uploadToCloudinary = async (filepath: string) => {
  try {
    const res = await cloudinary.uploader.upload(filepath)
    return {
      url: res.secure_url,
      publicId: res.public_id,
    }
  } catch (error) {
    console.error("upload err: ", error)
    throw new Error("error while upload to cloudinary")
  }
}

export default cloudinary
