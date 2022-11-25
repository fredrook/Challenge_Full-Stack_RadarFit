import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { IProducts } from "../interfaces/produtos/IProducts";
import { ValidationError } from "yup";
import schema from "../validations/createProduct.schema";
import {AppError} from "../errors/appError";
import PostCreateProductService from "../services/postCreateProduct.service";

const PostCreateProductsController = async (req: Request, res: Response) => {
    try {
      await schema.validate(req.body)
    } catch (error) {
      if (error instanceof ValidationError) {
        throw new AppError(error.message)
      }
    }
  
    const createProduct: IProducts = req.body
  
    const newProduct = await PostCreateProductService(createProduct)
  
    return res.status(201).json(instanceToPlain(newProduct))
  }
  
  export default PostCreateProductsController