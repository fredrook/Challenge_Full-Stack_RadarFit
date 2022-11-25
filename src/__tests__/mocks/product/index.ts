import { IProducts } from "../../../interfaces/produtos/IProducts"

export const mockedProduct: IProducts = {
  produto: "Alexa",
  descricao: "Eletrônico",
  valor: 300.00
}

export const mockedAnotherProduct: IProducts = {
  produto: "Radinho",
  descricao: "Eletrônico",
  valor: 30.00
}

export const mockedProductInvalid: IProducts = {
  produto: "",
  descricao: "Eletrônico",
  valor: 300.99
}
  
export const mockedProductAlredyExist: IProducts = {
  produto: "Alexa",
  descricao: "Eletrônico",
  valor: 300.00
}