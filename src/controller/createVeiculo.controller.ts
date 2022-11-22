import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import { IProducts } from "../interfaces/produtos/IProducts";
import { ValidationError } from "yup";
import schema from "../validations/createProduct.schema";
import AppError from "../errors/appError";
import CreateVeicleService from "../services/createVeiculo.service";

const CreateVeicleController = async (req: Request, res: Response) => {
    try {
      await schema.validate(req.body)
    } catch (error) {
      if (error instanceof ValidationError) {
        throw new AppError(error.message)
      }
    }
  
    const createVeicle: IProducts = req.body
  
    const newVeicle = await CreateVeicleService(createVeicle)
  
    return res.status(201).json(instanceToPlain(newVeicle))
  }
  
  export default CreateVeicleController