import * as express from "express"

declare global {
  namespace Express {
    interface Request {
      veiculo: {
        id: string
        produto: string
        valor: number
        descricao: string
      }
    }
  }
}
