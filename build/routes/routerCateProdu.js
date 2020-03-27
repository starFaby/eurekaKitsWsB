"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllerCateProdu_1 = __importDefault(require("../controller/controllerCateProdu"));
class RouterCateProdu {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', controllerCateProdu_1.default.listOne);
    }
}
const routerCateProdu = new RouterCateProdu();
exports.default = routerCateProdu.router;
