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
    onGetCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const categoriall = yield (yield database_1.default).query('select * from viewcategoria where estado = 1'); // lista a la persona para la cabecera de la factura
            const result = categoriall.length;
            if (result > 0) {
                return res.json(categoriall);
            }
            else {
                return res.status(204).json({ message: 'No Encontrado' });
            }
        });
    }
    onGetProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productoall = yield (yield database_1.default).query('select * from viewproducto where estado = 1'); // lista a la persona para la cabecera de la factura
            const result = productoall.length;
            if (result > 0) {
                return res.json(productoall);
            }
            else {
                return res.status(204).json({ message: 'No Encontrado' });
            }
        });
    }
    onGetPersona(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const personall = yield (yield database_1.default).query('select * from viewpersona where estado = 1'); // lista a la persona para la cabecera de la factura
            const result = personall.length;
            if (result > 0) {
                return res.json(personall);
            }
            else {
                return res.status(204).json({ message: 'No Encontrado' });
            }
        });
    }
    onGetEmail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = req.body;
            console.log(req.body);
            console.log(email);
            const emailall = yield (yield database_1.default).query('select email from persona where email = ?', [email]); // lista a la persona para la cabecera de la factura
            const result = emailall.length;
            if (result > 0) {
                return res.status(200).send(true);
            }
            else {
                return res.status(204).json({ message: 'No Encontrado' });
            }
        });
    }
    listOnePDT(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pdtOne = yield (yield database_1.default).query('select * from personapdt where idpersona = ?', [id]); // lista a la persona para la cabecera de la factura
            const result = pdtOne.length;
            if (result > 0) {
                return res.json(pdtOne);
            }
            else {
                return res.status(204).json({ message: 'No Encontrado' });
            }
        });
    }
    productouni(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const prodOne = yield (yield database_1.default).query('select * from viewproductouni where idproducto = ?', [id]); // para visualizar las promociones administrador
            const result = prodOne.length;
            if (result > 0) {
                return res.json(prodOne);
            }
            else {
                return res.status(204).json({ message: 'No Encontrado' });
            }
        });
    }
    promocionPP(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const promopp = yield (yield database_1.default).query('select * from viewpromocionespp where estado = 1'); // para visualizar las promociones administrador
            const result = promopp.length;
            if (result > 0) {
                return res.json(promopp);
            }
            else {
                return res.status(204).json({ message: 'No Encontrado' });
            }
        });
    }
    promocionPPI(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const promoppi = yield (yield database_1.default).query('select * from viewpromocionesppi'); // para visualizar las promociones administrador
            const result = promoppi.length;
            if (result > 0) {
                return res.json(promoppi);
            }
            else {
                return res.status(204).json({ message: 'No Encontrado' });
            }
        });
    }
    promocionUni(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const promouni = yield (yield database_1.default).query('select * from viewpromocionesppuni where idpromociones = ?', [id]); // para visualizar las promociones administrador
            const result = promouni.length;
            if (result > 0) {
                return res.json(promouni);
            }
            else {
                return res.status(204).json({ message: 'No Encontrado' });
            }
        });
    }
    detalleVentadvp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const detalledvp = yield (yield database_1.default).query('select * from viewdetalleventadvp where  idfactura = ? ', [id]); // para visualizar detalle ventas con id de producto con su nombre
            const result = detalledvp.length;
            if (result > 0) {
                return res.json(detalledvp);
            }
            else {
                return res.status(204).json({ message: 'No Encontrado' });
            }
        });
    }
    onGetDto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const dto = yield (yield database_1.default).query('SELECT * FROM viewdto'); // para visualizar detalle ventas con id de producto con su nombre
            const result = dto.length;
            if (result > 0) {
                return res.json(dto);
            }
            else {
                return res.status(204).json({ message: 'No Encontrado' });
            }
        });
    }
    onGetNumFactura(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const numFact = yield (yield database_1.default).query('SELECT MAX(factura.numfactura)+1 AS numfactura FROM factura'); // para visualizar detalle ventas con id de producto con su nombre
            const result = numFact.length;
            if (result > 0) {
                return res.json(numFact);
            }
            else {
                return res.status(204).json({ message: 'No Encontrado' });
            }
        });
    }
    onGetIdFactura(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idFact = yield (yield database_1.default).query('SELECT MAX(factura.idfactura)+1 AS idfactura  FROM factura'); // para visualizar detalle ventas con id de producto con su nombre
            const result = idFact.length;
            if (result > 0) {
                return res.json(idFact);
            }
            else {
                return res.status(204).json({ message: 'No Encontrado' });
            }
        });
    }
    onGetPersonaFactura(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const personaFactura = yield (yield database_1.default).query('select * from viewpersonafactura where estado = 1 AND idpersona = ? ', [id]); // para visualizar detalle ventas con id de producto con su nombre
            const result = personaFactura.length;
            if (result > 0) {
                return res.json(personaFactura);
            }
            else {
                return res.status(204).json({ message: 'No Encontrado' });
            }
        });
    }
    onGetTipoPago(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipopago = yield (yield database_1.default).query('SELECT * FROM viewtipopago'); // para visualizar detalle ventas con id de producto con su nombre
            const result = tipopago.length;
            if (result > 0) {
                return res.json(tipopago);
            }
            else {
                return res.status(204).json({ message: 'No Encontrado' });
            }
        });
    }
    onGetPagoFactPaypal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pfpaypal = yield (yield database_1.default).query('select * from viewpagofactptbe where idtipopago = 1 AND estado = 1 AND idpersona = ?', [id]);
            const result = pfpaypal.length;
            if (result > 0) {
                return res.json(pfpaypal);
            }
            else {
                return res.status(204).send({ message: 'No Encontrado' });
            }
        });
    }
    onGetPagoFactTransBanc(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pftransbanc = yield (yield database_1.default).query('select * from viewpagofactptbe where idtipopago = 2 AND estado = 1 AND idpersona = ?', [id]);
            const result = pftransbanc.length;
            if (result > 0) {
                return res.json(pftransbanc);
            }
            else {
                return res.status(204).send({ message: 'No Encontrado' });
            }
        });
    }
    onGetPagoFactEfectivo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pfefectivo = yield (yield database_1.default).query('select * from viewpagofactptbe where idtipopago = 3 AND estado = 1 AND idpersona = ?', [id]);
            const result = pfefectivo.length;
            if (result > 0) {
                return res.json(pfefectivo);
            }
            else {
                return res.status(204).send({ message: 'No Encontrado' });
            }
        });
    }
    onGetPagoFactIndiv(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pfefectivoindiv = yield (yield database_1.default).query('select * from viewformapagopy where numfactura = ?', [id]);
            const result = pfefectivoindiv.length;
            if (result > 0) {
                return res.json(pfefectivoindiv);
            }
            else {
                return res.status(204).send({ message: 'No Encontrado' });
            }
        });
    }
    onGetPagoPaypal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pagoPaypal = yield (yield database_1.default).query('select * from viewpagopaypal where idpersona = ?', [id]);
            const result = pagoPaypal.length;
            if (result > 0) {
                return res.json(pagoPaypal);
            }
            else {
                return res.status(204).send({ message: 'No Encontrado' });
            }
        });
    }
    onGetPagoTransBanc(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pagoTransBanc = yield (yield database_1.default).query('select * from viewpagotrasnbanc where idpersona = ?', [id]);
            const result = pagoTransBanc.length;
            if (result > 0) {
                return res.json(pagoTransBanc);
            }
            else {
                return res.status(204).send({ message: 'No Encontrado' });
            }
        });
    }
    onGetPagoEfectivo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const pagoEfectivo = yield (yield database_1.default).query('select * from viewpagoefectivo where idpersona = ?', [id]);
            const result = pagoEfectivo.length;
            if (result > 0) {
                return res.json(pagoEfectivo);
            }
            else {
                return res.status(204).send({ message: 'No Encontrado' });
            }
        });
    }
    onGetFacturadv(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const facturaDv = yield (yield database_1.default).query('select * from viewFacturadv where numfactura =  ?', [id]);
            const result = facturaDv.length;
            if (result > 0) {
                return res.json(facturaDv);
            }
            else {
                return res.status(204).send({ message: 'No Encontrado' });
            }
        });
    }
    onGetFacturaTotal(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const facturaTotal = yield (yield database_1.default).query('select * from viewFacturaTotal where numfactura = ?', [id]);
            const result = facturaTotal.length;
            if (result > 0) {
                return res.json(facturaTotal);
            }
            else {
                return res.status(204).send({ message: 'No Encontrado' });
            }
        });
    }
    onGetReportPersona(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reportPersona = yield (yield database_1.default).query('select * from viewreportpersona');
            const result = reportPersona.length;
            if (result > 0) {
                return res.json(reportPersona);
            }
            else {
                return res.status(204).send({ message: 'No Encontrado' });
            }
        });
    }
    onGetReportCategoria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reportCategoria = yield (yield database_1.default).query('select * from viewreportcategoria');
            const result = reportCategoria.length;
            if (result > 0) {
                return res.json(reportCategoria);
            }
            else {
                return res.status(204).send({ message: 'No Encontrado' });
            }
        });
    }
    onGetReportProducto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reportProducto = yield (yield database_1.default).query('select * from viewreportproducto');
            const result = reportProducto.length;
            if (result > 0) {
                return res.json(reportProducto);
            }
            else {
                return res.status(204).send({ message: 'No Encontrado' });
            }
        });
    }
    onGetReportPromociones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const reportPromo = yield (yield database_1.default).query('select * from viewreportpromociones');
            const result = reportPromo.length;
            if (result > 0) {
                return res.json(reportPromo);
            }
            else {
                return res.status(204).send({ message: 'No Encontrado' });
            }
        });
    }
}
const controllerConsultas = new ControllerConsultas();
exports.default = controllerConsultas;
