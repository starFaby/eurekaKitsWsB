"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ControllerFactura {
    listAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const factura = yield (yield database_1.default).query('SELECT * FROM factura');
            const result = factura.length;
            if (result > 0) {
                return res.json(factura);
            }
            else {
                return res.status(204).send({ message: 'No Encontrado' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idpersona, numfactura, estado } = req.body;
            const newFactura = {
                idpersona: idpersona,
                numfactura: numfactura,
                estado: estado,
                created_at: new Date,
            };
            const newFactG = yield (yield database_1.default).query('INSERT INTO factura SET ?', [newFactura]);
            const result = newFactG.insertId;
            if (result > 0) {
                return res.status(200).send({ result });
            }
            else {
                return res.status(204).send({ message: 'No Registrado' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { subtotal, dto, iva, total } = req.body;
            const newFactura = {
                subtotal: subtotal,
                dto: dto,
                iva: iva,
                total: total
            };
            console.log(newFactura);
            const fact = yield (yield database_1.default).query('UPDATE  factura SET ? WHERE idfactura=?', [newFactura, id]);
            const result = fact.affectedRows;
            if (result > 0) {
                return res.status(200).send({ message: 'Actualizado' });
            }
            else {
                return res.status(204).send({ message: 'No Actualizado' });
            }
        });
    }
    updateEstado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { estado } = req.body;
            const newFactura = {
                estado: estado,
            };
            const factEstado = yield (yield database_1.default).query('UPDATE  factura SET ? WHERE idfactura=?', [newFactura, id]);
            const result = factEstado.affectedRows;
            if (result > 0) {
                return res.status(200).send({ message: 'Actualizado' });
            }
            else {
                return res.status(204).send({ message: 'No Actualizado' });
            }
        });
    }
}
const controllerFactura = new ControllerFactura();
exports.default = controllerFactura;
