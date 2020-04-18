import { Router } from 'express';
import  controllerConsultas from '../controller/controllerConsultas';
class RouterConsultas {
    router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/pdt/:id', controllerConsultas.listOnePDT);
    }
}
const routerConsultas =  new RouterConsultas();
export default routerConsultas.router;