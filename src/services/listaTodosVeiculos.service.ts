import AppDataSource from "../data-source";
import Products from "../entities/product.entity";

const ListaTodosVeiculosService = async (): Promise<Products[]> => {
  const userRepository = AppDataSource.getRepository(Products);
  const users = await userRepository.find();
  return users;
};

export default ListaTodosVeiculosService;
