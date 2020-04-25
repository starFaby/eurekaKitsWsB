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
            const detalleVenta = yield (yield database_1.default).query('SELECT * FROM detalleventa');
            if (detalleVenta > 0) {
                return res.json(detalleVenta);
            }
            res.status(404).send('the consutl detalleventa not exist');
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
            yield (yield database_1.default).query('INSERT INTO detalleventa SET ?', [newDetalleVenta]);
            res.json({ message: 'Venta Saved' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield (yield database_1.default).query('DELETE FROM detalleventa WHERE iddetalleventa=?', [id]);
            res.json({ message: 'Venta Delete' });
        });
    }
}
const controllerDetalleVenta = new ControllerDetalleVenta();
exports.default = controllerDetalleVenta;
