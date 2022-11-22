import AppDataSource from "../data-source";
import Products from "../entities/product.entity";

const DeleteVeiculoService = async ( id: string ) => {
    const productsRepository = AppDataSource.getRepository(Products)

    const response = await productsRepository.query(
        `DELETE FROM
            products
        WHERE
            id = $1
        RETURNING
            *`
        , [id]
    );

    if( response.rowCount === 0 ){
        throw new Error("Produto não encontrado Dlt !")
    };

    return response.rows[0];
}

export default DeleteVeiculoService;