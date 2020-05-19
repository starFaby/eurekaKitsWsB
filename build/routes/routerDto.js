"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllerDto_1 = __importDefault(require("../controller/controllerDto"));
class RouterDto {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.put('/:id', controllerDto_1.default.update);
    }
}
const routerDto = new RouterDto();
exports.default = routerDto.router;
