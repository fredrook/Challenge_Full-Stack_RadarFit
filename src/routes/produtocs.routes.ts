import { Router } from "express"
import UpdatedTargetDadosVeiculoController from "../controller/atualizaAlgunsDadosVeiculo.controller";
import UpdatedAnyDadosVeiculoController from "../controller/atualizaQuaisquerDadosVeiculo.controller";
import CreateVeicleController from "../controller/createVeiculo.controller";
import DeleteVeiculoController from "../controller/deletaVeiculo.controller";
import ListByIdVeicleController from "../controller/findByIdVeiculo.controller";
import ListaTodosVeiculosController from "../controller/listaTodosVeiculos.controller";

const ProductsRoutes = Router()

ProductsRoutes.get("/", ListaTodosVeiculosController);
ProductsRoutes.get("/find")
ProductsRoutes.get("/:id", ListByIdVeicleController);
ProductsRoutes.post("/", CreateVeicleController);
ProductsRoutes.put("/:id", UpdatedAnyDadosVeiculoController);
ProductsRoutes.patch("/:id", UpdatedTargetDadosVeiculoController);
ProductsRoutes.delete("/:id", DeleteVeiculoController); 

export default ProductsRoutes
