import { Request, Response } from "express";
import { responseHandler } from "../../helpers/responseHandler";

const createProduct = async( req: Request, res: Response) =>{
  const data = "createProduct"
  responseHandler(req, res, 200, "Product created successfully!", data)
}

const getAllProducts = async( req: Request, res: Response) =>{
  const data = "getAllProducts"
  responseHandler(req, res, 200, "Product created successfully!", data)
}

const getSingleProduct = async( req: Request, res: Response) =>{
  const data = "getSingleProduct"
  responseHandler(req, res, 200, "Product created successfully!", data)
}


const searchProduct = async( req: Request, res: Response) =>{
  const data = "searchProduct"
  responseHandler(req, res, 200, "Product created successfully!", data)
}

const updateProduct = async( req: Request, res: Response) =>{
  const data = "updateProduct"
  responseHandler(req, res, 200, "Product created successfully!", data)
}

const deleteProduct = async( req: Request, res: Response) =>{
  const data = "deleteProduct"
  responseHandler(req, res, 200, "Product created successfully!", data)
}

export const productController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  searchProduct,
  updateProduct,
  deleteProduct
}