import type { RequestHandler } from "express"

export const helloExpress: RequestHandler = (req, res, next) => {
  res.render("index", {
    title: " home page",
    people: [
      {
        name: "yuling",
        age: 12,
      },
      {
        name: "sakurige",
        age: 18,
      },
    ],
  })
}
