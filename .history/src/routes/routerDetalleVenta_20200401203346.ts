import { Router } from 'express';
import controllerDetalleVenta  from '../controller/controllerDetalleVenta';
class RouterDetalleVenta {
    router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', controllerDetalleVenta.listAll);
        this.router.post('/', controllerDetalleVenta.create);
        this.router.delete('/:id', controllerDetalleVenta.delete);
        this.router.delete('/:id', controllerDetalleVenta.sumaVenta);
    }
}
const routerDetalleVenta =  new RouterDetalleVenta();
export default routerDetalleVenta.router;