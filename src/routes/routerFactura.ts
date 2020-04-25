import { Router } from 'express';
import  controllerFactura from '../controller/controllerFactura';
class RouterFactura {
    router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.post('/', controllerFactura.create);
        this.router.get('/', controllerFactura.listAll);
    }
}
const routerFactura =  new RouterFactura();
export default routerFactura.router;