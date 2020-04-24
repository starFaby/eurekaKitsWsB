import { Router } from 'express';
import  controllerFactura from '../controller/controllerFactura';
class RouterFactura {
    router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.post('/', controllerFactura.create);
    }
}
const routerFactura =  new RouterFactura();
export default routerFactura.router;