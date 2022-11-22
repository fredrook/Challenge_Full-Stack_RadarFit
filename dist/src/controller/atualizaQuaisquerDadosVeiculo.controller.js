"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const atualizaQuaisquerDadosVeiculo_service_1 = __importDefault(require("../services/atualizaQuaisquerDadosVeiculo.service"));
const UpdatedAnyDadosVeiculoController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { produto, valor, descricao } = req.body;
    const prodId = req.params.id;
    const updatedProduct = yield (0, atualizaQuaisquerDadosVeiculo_service_1.default)({ produto, valor, descricao }, prodId);
    return res.json(updatedProduct);
});
exports.default = UpdatedAnyDadosVeiculoController;
