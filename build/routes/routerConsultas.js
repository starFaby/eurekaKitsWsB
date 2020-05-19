"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllerConsultas_1 = __importDefault(require("../controller/controllerConsultas"));
class RouterConsultas {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/categoria', controllerConsultas_1.default.onGetCategoria);
        this.router.get('/producto', controllerConsultas_1.default.onGetProducto);
        this.router.get('/pers', controllerConsultas_1.default.onGetPersona);
        this.router.get('/pdt/:id', controllerConsultas_1.default.listOnePDT);
        this.router.get('/promopp', controllerConsultas_1.default.promocionPP);
        this.router.get('/promoppi', controllerConsultas_1.default.promocionPPI);
        this.router.get('/promouni/:id', controllerConsultas_1.default.promocionUni);
        this.router.get('/devedvp/:id', controllerConsultas_1.default.detalleVentadvp);
        this.router.get('/dto', controllerConsultas_1.default.onGetDto);
        this.router.get('/numfact', controllerConsultas_1.default.onGetNumFactura);
        this.router.get('/idfact', controllerConsultas_1.default.onGetIdFactura);
        this.router.get('/productouni/:id', controllerConsultas_1.default.productouni);
        this.router.get('/personafactura/:id', controllerConsultas_1.default.onGetPersonaFactura);
        this.router.get('/tipopago', controllerConsultas_1.default.onGetTipoPago);
        this.router.get('/pfpaypal/:id', controllerConsultas_1.default.onGetPagoFactPaypal); // muestra solo las facturas echas en paypal
        this.router.get('/pftransbanc/:id', controllerConsultas_1.default.onGetPagoFactTransBanc); // muestra solo las facturas echas en Transfer bancaria
        this.router.get('/pfefectivo/:id', controllerConsultas_1.default.onGetPagoFactEfectivo); // muestra solo las facturas echas en efectivo
        this.router.get('/pfindiv/:id', controllerConsultas_1.default.onGetPagoFactIndiv); // muestra los datos por el numero de factura
        this.router.get('/pagopaypal/:id', controllerConsultas_1.default.onGetPagoPaypal); // muestra el pago final de paypal
        this.router.get('/pagotransbanc/:id', controllerConsultas_1.default.onGetPagoTransBanc); // muestra el pago final de Transfer bancaria
        this.router.get('/pagoefectivo/:id', controllerConsultas_1.default.onGetPagoEfectivo); // muestra el pago final de efectivo
        this.router.get('/facturadv/:id', controllerConsultas_1.default.onGetFacturadv); // muestra los detalles final en el pdf
        this.router.get('/facturatotal/:id', controllerConsultas_1.default.onGetFacturaTotal); // muestra el pago total final en el pdf
        this.router.get('/reportpers', controllerConsultas_1.default.onGetReportPersona); // muestra el reporte persona en pdf
        this.router.get('/reportcateg', controllerConsultas_1.default.onGetReportCategoria); // muestra el reporte categoria en pdf
        this.router.get('/reportprod', controllerConsultas_1.default.onGetReportProducto); // muestra el reporte producto en pdf
        this.router.get('/reportpromo', controllerConsultas_1.default.onGetReportPromociones); // muestra el reporte promocion en pdf
    }
}
const routerConsultas = new RouterConsultas();
exports.default = routerConsultas.router;
