import { Request, Response } from "express"
import { instanceToPlain } from "class-transformer"
import ListByIdVeicleService from "../services/findByIdVeiculo.service"

const ListByIdVeicleController = async (req: Request, res: Response) => {
  const id = req.params.id

  const listDoctorsById = await ListByIdVeicleService(id)

  return res.status(200).json(instanceToPlain(listDoctorsById))
}

export default ListByIdVeicleController;
