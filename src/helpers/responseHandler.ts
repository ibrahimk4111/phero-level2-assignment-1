import { Request, Response } from "express"

export const responseHandler = (req: Request, res: Response, statusCode:number, success:boolean,  message:string, data: any) =>{
  res.status(statusCode).json({
    success,
    message,
    data
  })
}