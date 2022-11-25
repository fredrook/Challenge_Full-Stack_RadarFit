import AppDataSource from "../data-source"
import Products from "../entities/product.entity"
import {AppError} from "../errors/appError"
import { IProducts } from "../interfaces/produtos/IProducts"

const PostCreateProductService = async ({ produto, valor, descricao }: IProducts) => {
  const productRepository = AppDataSource.getRepository(Products)

  const products = await productRepository.find()

  const productAlredyExists = products.find((prod) => prod.produto === produto)

  if (productAlredyExists) {
    throw new AppError("Produtct already exist")
  }

  const veiculo = productRepository.create({
    produto,
    valor,
    descricao
  })

  await productRepository.save(veiculo)

  return veiculo
}

export default PostCreateProductService;