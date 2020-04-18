"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllerPromo_1 = __importDefault(require("../controller/controllerPromo"));
class RouterPromo {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', controllerPromo_1.default.listAll);
        this.router.get('/:id', controllerPromo_1.default.listOne);
        this.router.post('/', controllerPromo_1.default.create);
        this.router.put('/:id', controllerPromo_1.default.update);
        this.router.delete('/:id', controllerPromo_1.default.delete);
    }
}
const routerPromo = new RouterPromo();
exports.default = routerPromo.router;
