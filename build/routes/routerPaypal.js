"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllerPaypal_1 = __importDefault(require("../controller/controllerPaypal"));
class RouterPaypal {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/', controllerPaypal_1.default.create);
    }
}
const routerPaypal = new RouterPaypal();
exports.default = routerPaypal.router;
