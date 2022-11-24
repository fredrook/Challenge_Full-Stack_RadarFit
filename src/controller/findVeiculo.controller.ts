import { Request, Response } from "express"
import { instanceToPlain } from "class-transformer"
import FindVeicleService from "../services/findVeiculo.service"

const FindVeicleController = async (req: Request, res: Response) => {
    const prod= req.query.produto

    const targetProd = await (await FindVeicleService(prod))

  return res.status(200).json(instanceToPlain(targetProd))
}

export default FindVeicleController;