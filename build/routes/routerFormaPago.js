"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllerFormaPago_1 = __importDefault(require("../controller/controllerFormaPago"));
class RouterFormaPago {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', controllerFormaPago_1.default.createfp);
    }
}
const routerFormaPago = new RouterFormaPago();
exports.default = routerFormaPago.router;
