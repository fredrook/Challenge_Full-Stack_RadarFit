import { Router } from "express"
import PatchUpdateProductsByIdController from "../controller/patchUpdateProductsById.controller";
import PutUpdateAnyDataProductsController from "../controller/putUpdateAnyDataProducts.controller";
import PostCreateProductsController from "../controller/postCreateProduct.controller";
import DeleteProductController from "../controller/deleteProduct.controller";
import GetProductByIdController from "../controller/getProductById.controller";
import GetProductByParameterQController from "../controller/getProductByParameterQ.controller";
import GetAllProductsController from "../controller/getAllProducts.controller";

const ProductsRoutes = Router()

ProductsRoutes.get("/", GetAllProductsController);
ProductsRoutes.get("/find", GetProductByParameterQController)
ProductsRoutes.get("/:id", GetProductByIdController);
ProductsRoutes.post("/", PostCreateProductsController);
ProductsRoutes.put("/:id", PutUpdateAnyDataProductsController);
ProductsRoutes.patch("/:id", PatchUpdateProductsByIdController);
ProductsRoutes.delete("/:id", DeleteProductController); 

export default ProductsRoutes
