"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllerPaypalBuy_1 = __importDefault(require("../controller/controllerPaypalBuy"));
class RouterPaypal {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', controllerPaypalBuy_1.default.create);
        this.router.get('/success', controllerPaypalBuy_1.default.success);
        this.router.get('/cancel', controllerPaypalBuy_1.default.cancel);
    }
}
const routerPaypal = new RouterPaypal();
exports.default = routerPaypal.router;
