"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllerCategoria_1 = __importDefault(require("../controller/controllerCategoria"));
class RouterCategoria {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', controllerCategoria_1.default.listAll);
        this.router.get('/:id', controllerCategoria_1.default.listOne);
        this.router.post('/', controllerCategoria_1.default.create);
        this.router.put('/:id', controllerCategoria_1.default.update);
        this.router.put('/put/:id', controllerCategoria_1.default.delete);
    }
}
const routerCategoria = new RouterCategoria();
exports.default = routerCategoria.router;
