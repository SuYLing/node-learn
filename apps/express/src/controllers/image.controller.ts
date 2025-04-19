import type { RequestHandler } from "express"
import imageModel from "../models/image.model"
import { uploadToCloudinary } from "../utils/cloudinary"
import { sendRes } from "../utils/response"
export const uploadImage: RequestHandler = async (req, res) => {
  try {
    const file = req.file
    if (!file)
      return void sendRes(res, 500, {
        success: false,
        message: "file is require, please upload an image",
      })
    const { url, publicId } = await uploadToCloudinary(file.path)
    const newlyUploadImage = new imageModel({
      url,
      publicId,
      uploadedBy: req.user.userId,
    })
    await newlyUploadImage.save()
    return void sendRes(res, 201, {
      success: true,
      message: "upload successful",
      data: {
        image: newlyUploadImage,
      },
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "upload error",
    })
  }
}
