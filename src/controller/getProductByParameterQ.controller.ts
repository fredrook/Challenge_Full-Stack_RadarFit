import { Request, Response } from "express"
import { instanceToPlain } from "class-transformer"
import GetProductByParameterQService from "../services/getProductByParameterQ.service"

const GetProductByParameterQController = async (req: Request, res: Response) => {
    const prod= req.query.produto

    const targetProd = await ( GetProductByParameterQService(prod))

  return res.status(200).json(instanceToPlain(targetProd))
}

export default GetProductByParameterQController;