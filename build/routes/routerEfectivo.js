"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllerEfectivo_1 = __importDefault(require("../controller/controllerEfectivo"));
class RouterEfectivo {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', controllerEfectivo_1.default.create);
    }
}
const routerEfectivo = new RouterEfectivo();
exports.default = routerEfectivo.router;
