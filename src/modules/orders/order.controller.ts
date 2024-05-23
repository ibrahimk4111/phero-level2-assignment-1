import { Request, Response } from "express";
import { responseHandler } from "../../helpers/responseHandler";

const createOrder = async( req: Request, res: Response) =>{
  const data = "createOrder"
  responseHandler(req, res, 200, "Order created successfully!", data)
}

const getAllOrders = async( req: Request, res: Response) =>{
  const data = "getAllOrders"
  responseHandler(req, res, 200, "Order created successfully!", data)
}

const getSingleOrder = async( req: Request, res: Response) =>{
  const data = "getSingleOrder"
  responseHandler(req, res, 200, "Order created successfully!", data)
}


const searchOrder = async( req: Request, res: Response) =>{
  const data = "searchOrder"
  responseHandler(req, res, 200, "Order created successfully!", data)
}

const updateOrder = async( req: Request, res: Response) =>{
  const data = "updateOrder"
  responseHandler(req, res, 200, "Order created successfully!", data)
}

const deleteOrder = async( req: Request, res: Response) =>{
  const data = "deleteOrder"
  responseHandler(req, res, 200, "Order created successfully!", data)
}

export const orderController = {
  createOrder,
  getAllOrders,
  getSingleOrder,
  searchOrder,
  updateOrder,
  deleteOrder
}