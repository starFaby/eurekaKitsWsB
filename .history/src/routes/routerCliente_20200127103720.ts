import { Router } from 'express';
import  controllerCliente from '../controller/controllerCliente';
class ClienteRoutes {
    router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', controllerCliente.index);
    }
}
const clienteRoutes =  new ClienteRoutes();
export default clienteRoutes.router;