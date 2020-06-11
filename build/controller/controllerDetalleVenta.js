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
class ControllerDetalleVenta {
    listAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const detalleVenta = yield (yield database_1.default).query('SELECT * FROM detalleventas');
            const result = detalleVenta.length;
            if (result > 0) {
                return res.json(detalleVenta);
            }
            else {
                return res.status(204).send({ message: 'No Encontrado' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idfactura, idproducto, cantidad, precio, total, estado } = req.body;
            console.log(req.body);
            let newDetalleVenta = {
                idfactura: idfactura,
                idproducto: idproducto,
                cantidad: cantidad,
                precio: precio,
                total: total,
                estado: estado,
                created_at: new Date
            };
            console.log(newDetalleVenta);
            const detaventa = yield (yield database_1.default).query('INSERT INTO detalleventas SET ?', [newDetalleVenta]);
            const result = detaventa.insertId;
            if (result > 0) {
                return res.status(200).send({ message: 'Registrado' });
            }
            else {
                return res.status(204).send({ message: 'No Registrado' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const deletedt = yield (yield database_1.default).query('DELETE FROM detalleventas WHERE iddetalleventas=?', [id]);
            const result = deletedt.affectedRows;
            if (result > 0) {
                return res.status(200).send({ message: 'Eliminado' });
            }
            else {
                return res.status(204).send({ message: 'No Eliminado' });
            }
        });
    }
}
const controllerDetalleVenta = new ControllerDetalleVenta();
exports.default = controllerDetalleVenta;
