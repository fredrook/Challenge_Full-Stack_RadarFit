import { Request, Response } from "express"
import AppError, { handleError } from "../errors/appError";
import { IProductsUpdated } from "../interfaces/produtos/IProductsUpdated";
import UpdatedTargetDadosVeiculoService from "../services/atualizaAlgunsDadosVeiculo.service"
import schema from "../validations/updateTargetProduct.schema";

const UpdatedTargetDadosVeiculoController = async (req: Request, res: Response) => {
    try {
        const { id }: IProductsUpdated = req.params;
        const newData = schema.cast(req.body, { stripUnknown: true });
        const response = await UpdatedTargetDadosVeiculoService(newData, id);
        return res.status(200).json(response);
      } catch (error) {
        if (error instanceof AppError) {
          handleError(error, res);
        }
      }
}
export default UpdatedTargetDadosVeiculoController;

