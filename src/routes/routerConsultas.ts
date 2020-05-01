import { Router } from 'express';
import  controllerConsultas from '../controller/controllerConsultas';
class RouterConsultas {
    router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/pdt/:id', controllerConsultas.listOnePDT);
        this.router.get('/promopp', controllerConsultas.promocionPP);
        this.router.get('/promoppi', controllerConsultas.promocionPPI);
        this.router.get('/promouni/:id', controllerConsultas.promocionUni);
        this.router.get('/devedvp/:id', controllerConsultas.detalleVentadvp);
        this.router.get('/numfact', controllerConsultas.onGetNumFactura);
        this.router.get('/idfact', controllerConsultas.onGetIdFactura);
        this.router.get('/productouni/:id', controllerConsultas.productouni);
        this.router.get('/personafactura/:id', controllerConsultas.onGetPersonaFactura);
        this.router.get('/tipopago', controllerConsultas.onGetTipoPago);
        this.router.get('/pfpaypal/:id', controllerConsultas.onGetPagoFactPaypal);
        this.router.get('/pftransbanc/:id', controllerConsultas.onGetPagoFactTransBanc);
        this.router.get('/pfefectivo/:id', controllerConsultas.onGetPagoFactEfectivo);
        this.router.get('/pfindiv/:id', controllerConsultas.onGetPagoFactIndiv);
    }
}
const routerConsultas =  new RouterConsultas();
export default routerConsultas.router;