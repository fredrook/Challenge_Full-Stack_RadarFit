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
const class_transformer_1 = require("class-transformer");
const yup_1 = require("yup");
const createProduct_schema_1 = __importDefault(require("../validations/createProduct.schema"));
const appError_1 = __importDefault(require("../errors/appError"));
const createVeiculo_service_1 = __importDefault(require("../services/createVeiculo.service"));
const CreateVeicleController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield createProduct_schema_1.default.validate(req.body);
    }
    catch (error) {
        if (error instanceof yup_1.ValidationError) {
            throw new appError_1.default(error.message);
        }
    }
    const createVeicle = req.body;
    const newVeicle = yield (0, createVeiculo_service_1.default)(createVeicle);
    return res.status(201).json((0, class_transformer_1.instanceToPlain)(newVeicle));
});
exports.default = CreateVeicleController;
