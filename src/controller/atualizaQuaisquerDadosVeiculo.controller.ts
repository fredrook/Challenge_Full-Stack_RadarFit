import { Request, Response } from "express"
import { IProductsUpdated } from "../interfaces/produtos/IProductsUpdated"
import UpdateAnyDadosVeiculoService from "../services/atualizaQuaisquerDadosVeiculo.service"

const UpdatedAnyDadosVeiculoController = async (req: Request, res: Response) => {
  const { produto, valor, descricao }: IProductsUpdated = req.body

  const prodId = req.params.id

  const updatedProduct = await UpdateAnyDadosVeiculoService({ produto, valor, descricao }, prodId)

  return res.json(updatedProduct)
}
export default UpdatedAnyDadosVeiculoController;

