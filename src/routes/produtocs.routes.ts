import { Router } from "express"
import UpdatedAnyDadosVeiculoController from "../controller/atualizaQuaisquerDadosVeiculo.controller";
import CreateVeicleController from "../controller/createVeiculo.controller";
import DeleteVeiculoController from "../controller/deletaVeiculo.controller";
import ListaTodosVeiculosController from "../controller/listaTodosVeiculos.controller";

const ProductsRoutes = Router()

ProductsRoutes.get("/", ListaTodosVeiculosController);
ProductsRoutes.get("/find");
ProductsRoutes.get("/:id");
ProductsRoutes.post("/", CreateVeicleController);
ProductsRoutes.put("/:id", UpdatedAnyDadosVeiculoController);
ProductsRoutes.patch("/:id");
ProductsRoutes.delete("/:id", DeleteVeiculoController);

export default ProductsRoutes
