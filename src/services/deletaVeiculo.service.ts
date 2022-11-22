import AppDataSource from "../data-source";
import Products from "../entities/product.entity";

const DeleteVeiculoService = async ( id: string ) => {
    const productsRepository = AppDataSource.getRepository(Products)

    const response = await productsRepository.delete(id)
    
    if( !response ){
        throw new Error("Produto não encontrado Dlt !")
    };

    return response
}

export default DeleteVeiculoService;