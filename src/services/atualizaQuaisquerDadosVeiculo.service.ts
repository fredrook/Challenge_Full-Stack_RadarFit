import AppDataSource from "../data-source"
import Products from "../entities/product.entity"
import AppError from "../errors/appError"
import { IProductsUpdated } from "../interfaces/produtos/IProductsUpdated"

const UpdateAnyDadosVeiculoService = async ({ produto, valor, descricao}: IProductsUpdated, prodId: string) => {
  const productsRepository = AppDataSource.getRepository(Products)


  const findProduct = await productsRepository.findOneBy({ id: prodId })


  if (!findProduct) {
    throw new AppError("Product not found", 404)
  }

  const updatedProduct = await productsRepository.update(prodId, {
    produto,
    valor,
    descricao
  })

  return updatedProduct
}
export default UpdateAnyDadosVeiculoService;
