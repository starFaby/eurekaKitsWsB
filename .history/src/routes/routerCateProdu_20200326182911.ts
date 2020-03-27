import { Router } from 'express';
// import  controllerProducto from '../controller/controllerProducto';
class RouterCateProdu {
    router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/:id', controllerProducto.listOne);
    }
}
const routerProducto =  new RouterProducto();
export default routerProducto.router;