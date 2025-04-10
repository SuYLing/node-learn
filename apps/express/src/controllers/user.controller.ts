import type { RequestHandler } from "express"

export const getUserById: RequestHandler<{ id: string }> = (req, res, next) => {
  const { id } = req.params
  res.send(`hello user ${id}`)
}
