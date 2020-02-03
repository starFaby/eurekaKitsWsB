import { Router } from 'express';
class ClienteRoutes {
    router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', (req, res)=>{
            res.send('Hola Clientes');
        });
    }
}
const clienteRoutes =  new ClienteRoutes();
export default clienteRoutes.router;