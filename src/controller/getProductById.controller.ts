import { Request, Response } from "express"
import { instanceToPlain } from "class-transformer"
import GetProductByIdService from "../services/getProductById.service"

const GetProductByIdController = async (req: Request, res: Response) => {
  const id = req.params.id

  const listDoctorsById = await GetProductByIdService(id)

  return res.status(200).json(instanceToPlain(listDoctorsById))
}

export default GetProductByIdController;
