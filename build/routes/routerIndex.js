"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllerIndex_1 = __importDefault(require("../controller/controllerIndex"));
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', controllerIndex_1.default.index);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
//1:00:08
