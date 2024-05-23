import { Request, Response } from "express";

export const errorHandler = (error: Error, req: Request, res: Response) =>{

  const statusCode = 500;

  res.status(statusCode).json({
    message: error?.message,
    name: error?.name,
    stack: error?.stack
  })
}