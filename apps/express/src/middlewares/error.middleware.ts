export default class APIError extends Error {
  public statusCode: number = 0
  public message: string = ""
  constructor(message: string, statusCode: number) {
    super(message)
    this.message = message
    this.statusCode = statusCode
  }
}
