import { Request, Response } from "express"
import { AppError, handleError } from "../errors/appError";
import { IProductsUpdated } from "../interfaces/produtos/IProductsUpdated";
import PatchUpdateProductsByIdService from "../services/patchUpdateProductsById.service"
import schema from "../validations/updateTargetProduct.schema";

const PatchUpdateProductsByIdController = async (req: Request, res: Response) => {
    try {
        const { id }: IProductsUpdated = req.params;
        const newData = schema.cast(req.body, { stripUnknown: true });
        const response = await PatchUpdateProductsByIdService(newData, id);
        return res.status(200).json(response);
      } catch (error) {
        if (error instanceof AppError) {
          handleError(error, res);
        }
      }
}
export default PatchUpdateProductsByIdController;

