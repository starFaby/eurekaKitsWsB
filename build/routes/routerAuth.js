"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllerAuth_1 = __importDefault(require("../controller/controllerAuth"));
class RouterAuth {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.post('/up', controllerAuth_1.default.loginUp);
        this.router.post('/in', controllerAuth_1.default.loginIn);
    }
}
const routerAuth = new RouterAuth();
exports.default = routerAuth.router;
