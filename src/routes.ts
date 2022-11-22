import { Router } from "express";

const routes = Router();

routes.get("/produtos");
routes.post("/produtos");
routes.put("/produtos");
routes.patch("/produtos");
routes.delete("/produtos");

export default routes;
