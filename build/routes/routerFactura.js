"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllerFactura_1 = __importDefault(require("../controller/controllerFactura"));
const token_1 = __importDefault(require("../middlewares/token"));
class RouterFactura {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', controllerFactura_1.default.listAll);
        this.router.post('/', token_1.default.verifyToken, controllerFactura_1.default.create);
        this.router.put('/:id', controllerFactura_1.default.update);
    }
}
const routerFactura = new RouterFactura();
exports.default = routerFactura.router;
