import { Router } from 'express';
import  controllerCliente from '../controller/controllerCliente';
class ClienteRoutes {
    router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', controllerCliente.listAll);
        this.router.get('/2', controllerCliente.listOne);
        this.router.post('/', controllerCliente.create);
        this.router.put('/:id', controllerCliente.update);
        this.router.delete('/:id', controllerCliente.delete);
    }
}
const clienteRoutes =  new ClienteRoutes();
export default clienteRoutes.router;