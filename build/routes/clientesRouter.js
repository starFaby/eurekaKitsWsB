"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ClienteRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => {
            res.send('Hola Clientes');
        });
    }
}
const clienteRoutes = new ClienteRoutes();
exports.default = clienteRoutes.router;
