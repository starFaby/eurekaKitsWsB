"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllerDireccion_1 = __importDefault(require("../controller/controllerDireccion"));
class RouterDireccion {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', controllerDireccion_1.default.listAll);
        this.router.get('/:id', controllerDireccion_1.default.listOne);
        this.router.post('/', controllerDireccion_1.default.create);
        this.router.put('/:id', controllerDireccion_1.default.update);
        this.router.delete('/:id', controllerDireccion_1.default.delete);
    }
}
const routerDireccion = new RouterDireccion();
exports.default = routerDireccion.router;
