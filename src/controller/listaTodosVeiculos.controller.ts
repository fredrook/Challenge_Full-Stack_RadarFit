import { Request, Response } from "express"
import { instanceToPlain } from "class-transformer"
import ListaTodosVeiculosService from "../services/listaTodosVeiculos.service"

const ListaTodosVeiculosController = async (req: Request, res: Response) => {
  const allVeicles = await ListaTodosVeiculosService()
  return res.json(instanceToPlain(allVeicles))
}

export default ListaTodosVeiculosController
