import { Request, Response } from "express"
import { instanceToPlain } from "class-transformer"
import GetAllProductsService from "../services/getAllProducts.service"

const GetAllProductsController = async (req: Request, res: Response) => {
  const allVeicles = await GetAllProductsService()
  return res.json(instanceToPlain(allVeicles))
}

export default GetAllProductsController
