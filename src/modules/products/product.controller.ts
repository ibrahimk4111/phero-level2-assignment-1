import { NextFunction, Request, Response } from "express";
import { responseHandler } from "../../helpers/responseHandler";
import { productService } from "./product.service";
import ProductZodSchema from "./product.validation";
import { Product } from "./product.model";

const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body;
    let result;
    if (await Product.isExistsProduct(name)) {
      result = 'Product already exist!'
      responseHandler(req, res, 200, false, "Try another product", result);
    } else {
      const validationResult = ProductZodSchema.parse(req.body);
      result = await productService.createProductToDB(validationResult);
      responseHandler(req, res, 200, true, "Product created successfully!", result);
    }
  } catch (error) {
    next(error)
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  const result = "getAllProducts";
  responseHandler(req, res, 200, true, "Product created successfully!", result);
};

const getSingleProduct = async (req: Request, res: Response) => {
  const result = "getSingleProduct";
  responseHandler(req, res, 200, true, "Product created successfully!", result);
};

const searchProduct = async (req: Request, res: Response) => {
  const result = "searchProduct";
  responseHandler(req, res, 200, true, "Product created successfully!", result);
};

const updateProduct = async (req: Request, res: Response) => {
  const result = "updateProduct";
  responseHandler(req, res, 200, true, "Product created successfully!", result);
};

const deleteProduct = async (req: Request, res: Response) => {
  const result = "deleteProduct";
  responseHandler(req, res, 200, true, "Product created successfully!", result);
};

export const productController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  searchProduct,
  updateProduct,
  deleteProduct,
};
