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
    productouni(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pdtOne = yield (yield database_1.default).query('select * from viewproductouni where idproducto = ?', [id]); // para visualizar las promociones administrador
            if (pdtOne.length > 0) {
                return res.json(pdtOne);
            }
            res.status(404).json({ text: 'the consutl promocion_producto not exist' });
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
            else {
                return res.status(404).send({ text: 'No existe promociones not exist' });
            }
        });
    }
    promocionUni(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pUniOne = yield (yield database_1.default).query('select * from viewpromocionesppuni where idpromociones = ?', [id]); // para visualizar las promociones administrador
            if (pUniOne.length > 0) {
                return res.json(pUniOne);
            }
            res.status(404).json({ text: 'the consutl promocion_producto not exist' });
        });
    }
    detalleVentadvp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pdtOne = yield (yield database_1.default).query('select * from viewdetalleventadvp where  idfactura = ? ', [id]); // para visualizar detalle ventas con id de producto con su nombre
            if (pdtOne.length > 0) {
                return res.json(pdtOne);
            }
            else {
                res.status(404).send('the detalle venta not exist');
            }
        });
    }
    onGetNumFactura(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const numFact = yield (yield database_1.default).query('SELECT MAX(factura.numfactura)+1 AS numfactura FROM factura'); // para visualizar detalle ventas con id de producto con su nombre
            return res.json(numFact);
            // res.status(404).json({text: 'the consutl promocion_producto not exist'})
        });
    }
    onGetIdFactura(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idFact = yield (yield database_1.default).query('SELECT MAX(factura.idfactura)+1 AS idfactura  FROM factura'); // para visualizar detalle ventas con id de producto con su nombre
            return res.json(idFact);
            // res.status(404).json({text: 'the consutl promocion_producto not exist'})
        });
    }
    onGetPersonaFactura(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const personaFactura = yield (yield database_1.default).query('select * from viewpersonafactura where estado = 1 AND idpersona = ? ', [id]); // para visualizar detalle ventas con id de producto con su nombre
            if (personaFactura.length > 0) {
                return res.json(personaFactura);
            }
            else {
                res.status(404).send({ message: 'No existe facturas para este cliente' });
            }
        });
    }
    onGetTipoPago(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipopago = yield (yield database_1.default).query('SELECT * FROM viewtipopago'); // para visualizar detalle ventas con id de producto con su nombre
            console.log(tipopago);
            return res.json(tipopago);
            // res.status(404).json({text: 'the consutl promocion_producto not exist'})
        });
    }
    onGetPagoFactPaypal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pfpaypal = yield (yield database_1.default).query('select * from viewpagofactptbe where idtipopago = 1 AND estado = 1 AND idpersona = ?', [id]); // para visualizar solo las facturas de tipo paypal
            const result = pfpaypal.length;
            if (result > 0) {
                return res.json(pfpaypal);
            }
            else {
                res.status(404).send({ message: 'Error' });
            }
        });
    }
    onGetPagoFactTransBanc(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pftransbanc = yield (yield database_1.default).query('select * from viewpagofactptbe where idtipopago = 2 AND estado = 1 AND idpersona = ?', [id]); // para visualizar solo las facturas de tipo paypal
            const result = pftransbanc.length;
            if (result > 0) {
                return res.json(pftransbanc);
            }
            else {
                res.status(404).send({ message: 'Error' });
            }
        });
    }
    onGetPagoFactEfectivo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pfefectivo = yield (yield database_1.default).query('select * from viewpagofactptbe where idtipopago = 3 AND estado = 1 AND idpersona = ?', [id]); // para visualizar solo las facturas de tipo paypal
            const result = pfefectivo.length;
            if (result > 0) {
                return res.json(pfefectivo);
            }
            else {
                res.status(404).send({ message: 'Error' });
            }
        });
    }
    onGetPagoFactIndiv(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pfefectivoindiv = yield (yield database_1.default).query('select * from viewformapagopy where numfactura = ?', [id]); // para visualizar solo las facturas de tipo paypal
            const result = pfefectivoindiv.length;
            if (result > 0) {
                return res.json(pfefectivoindiv);
            }
            else {
                res.status(404).send({ message: 'Error' });
            }
        });
    }
}
const controllerConsultas = new ControllerConsultas();
exports.default = controllerConsultas;
