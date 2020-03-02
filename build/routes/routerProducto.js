"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllerProducto_1 = __importDefault(require("../controller/controllerProducto"));
class RouterProducto {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', controllerProducto_1.default.listAll);
        this.router.get('/:id', controllerProducto_1.default.listOne);
        this.router.post('/', controllerProducto_1.default.create);
        this.router.put('/:id', controllerProducto_1.default.update);
        this.router.delete('/:id', controllerProducto_1.default.delete);
    }
}
const routerProducto = new RouterProducto();
exports.default = routerProducto.router;
