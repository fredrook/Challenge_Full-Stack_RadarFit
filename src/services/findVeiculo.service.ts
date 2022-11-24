import AppDataSource from "../data-source";
import Products from "../entities/product.entity";
import AppError from "../errors/appError";

const FindVeicleService = async ( produto: any) => {
  const productRepository = AppDataSource.getRepository(Products);

  const targetProduct = await productRepository.find({ where: {
    produto
  }})

  if (!targetProduct) {
    throw new AppError("Product not found!", 404);
  }

  return targetProduct;
};

export default FindVeicleService;