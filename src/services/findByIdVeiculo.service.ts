import AppDataSource from "../data-source";
import Products from "../entities/product.entity";
import AppError from "../errors/appError";

const ListByIdVeicleService = async (id: string) => {
  const productRepository = AppDataSource.getRepository(Products);

  const product = await productRepository.findOne({
    where: {
      id: id,
    },
  });

  if (!product) {
    throw new AppError("Product not found!", 404);
  }

  return product;
};

export default ListByIdVeicleService;
