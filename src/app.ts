import "reflect-metadata"
import express from "express"
import "express-async-errors"

import ProductsRoutes from "./routes/produtocs.routes"

const app = express()
app.use(express.json())

app.use("/produtos", ProductsRoutes)

export default app
