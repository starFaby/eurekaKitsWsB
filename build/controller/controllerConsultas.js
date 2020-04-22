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
class ControllerConsultas {
    listOnePDT(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pdtOne = yield (yield database_1.default).query('select * from personapdt where idpersona = ?', [id]); // lista a la persona para la cabecera de la factura
            if (pdtOne.length > 0) {
                console.log(pdtOne);
                return res.json(pdtOne);
            }
            res.status(404).json({ text: 'the consutl pers_Direcc_Tele not exist' });
        });
    }
    promocionPP(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pdtOne = yield (yield database_1.default).query('select * from viewpromocionespp'); // para visualizar las promociones administrador
            if (pdtOne.length > 0) {
                return res.json(pdtOne);
            }
            res.status(404).json({ text: 'the consutl promocion_producto not exist' });
        });
    }
    promocionPPI(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pdtOne = yield (yield database_1.default).query('select * from viewpromocionesppi'); // para visualizar las promociones administrador
            if (pdtOne.length > 0) {
                return res.json(pdtOne);
            }
            res.status(404).json({ text: 'the consutl promocion_producto not exist' });
        });
    }
    detalleVentadvp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pdtOne = yield (yield database_1.default).query('select * from viewdetalleventadvp'); // para visualizar detalle ventas con id de producto con su nombre
            if (pdtOne.length > 0) {
                return res.json(pdtOne);
            }
            res.status(404).send('the consutl promocion_producto not exist');
        });
    }
    onGetNumFactura(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const numFact = yield (yield database_1.default).query('SELECT MAX(factura.numfactura)+1 AS numfactura FROM factura'); // para visualizar detalle ventas con id de producto con su nombre
            return res.json(numFact);
            // res.status(404).json({text: 'the consutl promocion_producto not exist'})
        });
    }
}
const controllerConsultas = new ControllerConsultas();
exports.default = controllerConsultas;