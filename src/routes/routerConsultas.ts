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
        this.router.get('/devedvp', controllerConsultas.detalleVentadvp);
        this.router.get('/numfact', controllerConsultas.onGetNumFactura);
        this.router.get('/idfact', controllerConsultas.onGetIdFactura);
        this.router.get('/productouni/:id', controllerConsultas.productouni);
    }
}
const routerConsultas =  new RouterConsultas();
export default routerConsultas.router;