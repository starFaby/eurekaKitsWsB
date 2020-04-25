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
            res.json(factura);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idpersona, numfactura, subtotal, dto, iva, total, estado } = req.body;
            console.log(req.body);
            let newFactura = {
                idpersona: idpersona,
                numfactura: numfactura,
                subtotal: subtotal,
                dto: dto,
                iva: iva,
                total: total,
                estado: estado,
                created_at: new Date,
            };
            console.log(newFactura);
            yield (yield database_1.default).query('INSERT INTO factura SET ?', [newFactura]);
            ;
            res.json({ message: 'Factura Saved' });
        });
    }
}
const controllerFactura = new ControllerFactura();
exports.default = controllerFactura;
