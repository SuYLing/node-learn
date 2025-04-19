import multer from "multer"
import path from "path"
const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "uploads/")
  },
  filename(req, file, callback) {
    callback(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    )
  },
})

const uploadMiddleware = multer({
  storage,
  fileFilter: (req, file, callback) => {
    if (!file.mimetype.startsWith("image/")) {
      callback(new Error("please upload image correct"))
    } else {
      callback(null, true)
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 4,
  },
})
export default uploadMiddleware
