import { Request, Response } from "express";
import DeleteVeiculoService from "../services/deletaVeiculo.service";

const DeleteVeiculoController = async (request: Request, response: Response) => {
    try {
        const id: string = request.params.id;

        const veiculo =  await DeleteVeiculoService(id);
        
        return response.status(204).json({message: "Produto Deletado!"});

    } catch (error) {

        if (error instanceof Error) {

            return response.status(403).send({
                "error": error.name,
                "message": error.message
            })
        }
    }
}

export default DeleteVeiculoController;