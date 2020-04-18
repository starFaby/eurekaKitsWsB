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
class ControllerPromo {
    listAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const promo = yield (yield database_1.default).query('SELECT * FROM promociones');
            res.json(promo);
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const promoOne = yield (yield database_1.default).query('SELECT * FROM promociones WHERE idpromociones=?', [id]);
            if (promoOne.length > 0) {
                return res.json(promoOne[0]);
            }
            res.status(404).json({ text: 'the promise not exist' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idproducto, descuento, fechainicio, fechafin, descripcion, estado, } = req.body;
            let newPromo = {
                idproducto: idproducto,
                descuento: descuento,
                fechainicio: fechainicio,
                fechafin: fechafin,
                descripcion: descripcion,
                estado: estado,
                created_at: new Date
            };
            yield (yield database_1.default).query('INSERT INTO promociones SET ?', [newPromo]);
            ;
            res.json({ message: 'Promociones saved ' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { idproducto, descuento, fechainicio, fechafin, descripcion, estado, } = req.body;
            let newPromo = {
                idproducto: idproducto,
                descuento: descuento,
                fechainicio: fechainicio,
                fechafin: fechafin,
                descripcion: descripcion,
                estado: estado,
                created_at: new Date
            };
            yield (yield database_1.default).query('UPDATE  promociones SET ? WHERE idpromociones=?', [newPromo, id]);
            res.json({ message: 'update Producto' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield (yield database_1.default).query('DELETE FROM promociones WHERE idpromociones=?', [id]);
            res.json({ message: 'delete Promociones' });
        });
    }
}
const controllerPromo = new ControllerPromo();
exports.default = controllerPromo;
