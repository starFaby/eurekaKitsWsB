"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllerTrasferenciaBancaria_1 = __importDefault(require("../controller/controllerTrasferenciaBancaria"));
class RouterTrasferenciaBancaria {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', controllerTrasferenciaBancaria_1.default.create);
    }
}
const routerTrasferenciaBancaria = new RouterTrasferenciaBancaria();
exports.default = routerTrasferenciaBancaria.router;
