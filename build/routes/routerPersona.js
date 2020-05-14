"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllerPersona_1 = __importDefault(require("../controller/controllerPersona"));
class RouterPersona {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', controllerPersona_1.default.listOne);
        this.router.post('/', controllerPersona_1.default.create);
        this.router.put('/:id', controllerPersona_1.default.update);
        this.router.put('/put/:id', controllerPersona_1.default.delete);
    }
}
const routerPersona = new RouterPersona();
exports.default = routerPersona.router;
