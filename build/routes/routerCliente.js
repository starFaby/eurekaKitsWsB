"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllerCliente_1 = __importDefault(require("../controller/controllerCliente"));
class ClienteRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', controllerCliente_1.default.listAll);
        this.router.get('/:id', controllerCliente_1.default.listOne);
        this.router.post('/', controllerCliente_1.default.create);
        this.router.put('/:id', controllerCliente_1.default.update);
        this.router.delete('/:id', controllerCliente_1.default.delete);
    }
}
const clienteRoutes = new ClienteRoutes();
exports.default = clienteRoutes.router;
