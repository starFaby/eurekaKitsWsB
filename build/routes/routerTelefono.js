"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllerTelefono_1 = __importDefault(require("../controller/controllerTelefono"));
class RouterTelefono {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', controllerTelefono_1.default.listAll);
        this.router.get('/:id', controllerTelefono_1.default.listOne);
        this.router.post('/', controllerTelefono_1.default.create);
        this.router.put('/:id', controllerTelefono_1.default.update);
        this.router.delete('/:id', controllerTelefono_1.default.delete);
    }
}
const routerTelefono = new RouterTelefono();
exports.default = routerTelefono.router;
