import { Request, Response } from "express"

export const responseHandler = (req: Request, res: Response, statusCode:number, message:string, data: any) =>{
  res.status(statusCode).json({
    message,
    data
  })
}