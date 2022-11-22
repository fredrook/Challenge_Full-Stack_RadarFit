import { Response } from "express";

class AppError extends Error {
  statusCode: number
  constructor(message: string, statusCode: number = 400) {
    super()
    this.message = message
    this.statusCode = statusCode
  }
}

export default AppError


export const handleError = (error: AppError, response: Response) => {
  const { statusCode, message } = error;

  return response.status(statusCode).json({
    status: "error",
    statusCode,
    message,
  });
};
