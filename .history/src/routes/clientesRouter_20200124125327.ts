import { Router } from 'express';
class ClienteRoutes {
    router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        this.router.get('/', (req, res)=>{
            res.send('HOLA FABY');
        });
    }
}
const clienteRoutes =  new ClienteRoutes();
export default clienteRoutes.router;