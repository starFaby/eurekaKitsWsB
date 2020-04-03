import { Router } from 'express';
import  controllerPersona from '../controller/controllerPersona';
class RouterPersona {
    router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', controllerPersona.listAll);
        this.router.get('/:id', controllerPersona.listOne);
        this.router.post('/', controllerPersona.create);
        this.router.put('/:id', controllerPersona.update);
        this.router.delete('/:id', controllerPersona.delete);
    }
}
const routerPersona =  new RouterPersona();
export default routerPersona.router;