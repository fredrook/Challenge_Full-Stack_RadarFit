"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
require("dotenv/config");
const path_1 = __importDefault(require("path"));
const isProduction = process.env.NODE_ENV === "production";
const AppDataSource = new typeorm_1.DataSource(process.env.NODE_ENV === "test"
    ? {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/*.ts"],
    }
    : {
        type: "postgres",
        url: process.env.DATABASE_URL,
        ssl: isProduction
            ? {
                rejectUnauthorized: false,
            }
            : false,
        synchronize: false,
        logging: isProduction ? false : true,
        entities: [path_1.default.join(__dirname, "./entities/*.{js,ts}")],
        migrations: [path_1.default.join(__dirname, "./migrations/*.{js,ts}")],
    });
exports.default = AppDataSource;
