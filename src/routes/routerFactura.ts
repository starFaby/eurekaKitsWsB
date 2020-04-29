import { Router } from 'express';
import  controllerFactura from '../controller/controllerFactura';
import jwt from '../middlewares/token';
class RouterFactura {
    router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', controllerFactura.listAll);
        this.router.post('/',jwt.verifyToken, controllerFactura.create);
        this.router.put('/:id', controllerFactura.update);
    }
}
const routerFactura =  new RouterFactura();
export default routerFactura.router;