import AppDataSource from "../data-source"
import Products from "../entities/product.entity"
import {AppError} from "../errors/appError"
import { IProductsUpdated } from "../interfaces/produtos/IProductsUpdated"

const PutUpdateAnyDataProductsService = async ({ produto, valor, descricao}: IProductsUpdated, prodId: string) => {
  const productsRepository = AppDataSource.getRepository(Products)

  const findProduct = await productsRepository.findOneBy({ id: prodId })

  if (!findProduct) {
    throw new AppError("Product not found", 404)
  }

 await productsRepository.update(prodId, {
    produto,
    valor,
    descricao
  })

  const updatedProduct = await productsRepository.findOneBy({ id: prodId })

  return updatedProduct
}
export default PutUpdateAnyDataProductsService;