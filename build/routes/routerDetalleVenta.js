"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllerDetalleVenta_1 = __importDefault(require("../controller/controllerDetalleVenta"));
const token_1 = __importDefault(require("../middlewares/token"));
class RouterDetalleVenta {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', token_1.default.verifyToken, controllerDetalleVenta_1.default.listAll);
        this.router.post('/', token_1.default.verifyToken, controllerDetalleVenta_1.default.create);
        this.router.delete('/:id', controllerDetalleVenta_1.default.delete);
    }
}
const routerDetalleVenta = new RouterDetalleVenta();
exports.default = routerDetalleVenta.router;
