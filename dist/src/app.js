"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const produtocs_routes_1 = __importDefault(require("./routes/produtocs.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/produtos", produtocs_routes_1.default);
exports.default = app;
