import { Request, Response } from "express"
import { IProductsUpdated } from "../interfaces/produtos/IProductsUpdated"
import PutUpdateAnyDataProductsService from "../services/putUpdateAnyDataProducts.service"

const PutUpdateAnyDataProductsController = async (req: Request, res: Response) => {
  const { produto, valor, descricao }: IProductsUpdated = req.body

  const prodId = req.params.id

  const updatedProduct = await PutUpdateAnyDataProductsService({ produto, valor, descricao }, prodId)

  return res.json(updatedProduct)
}
export default PutUpdateAnyDataProductsController;

