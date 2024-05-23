import { ProductType } from "./product.interface"
import { Product } from "./product.model"

const createProductToDB = async (productData: ProductType) =>{
 const result = await Product.create(productData)
 return result;
}

export const productService = {
  createProductToDB
}