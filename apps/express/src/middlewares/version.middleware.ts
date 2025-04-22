import { RequestHandler } from "express"
const urlVersioning: (version: string) => RequestHandler =
  (version: string) => (req, res, next) => {
    if (req.path.startsWith(`/api/${version}`)) next()
    else {
      res.status(404).json({
        success: false,
        error: "API version is not supported",
      })
    }
  }
