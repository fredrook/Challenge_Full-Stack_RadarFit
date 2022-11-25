import AppDataSource from "../data-source";
import Products from "../entities/product.entity";
import { AppError } from "../errors/appError";

const DeleteProductService = async ( id: string ) => {
    const productsRepository = AppDataSource.getRepository(Products)

    const response = await productsRepository.delete(id)
    
    if( !response ){
        throw new AppError("Produto não encontrado Dlt !")
    };

    return response
}

export default DeleteProductService;