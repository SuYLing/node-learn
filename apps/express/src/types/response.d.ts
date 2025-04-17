export interface BaseResponse {
  success: boolean
  message: string
}

export type ApiResponse<T = undefined> = T extends undefined
  ? BaseResponse
  : BaseResponse & { data: T }
