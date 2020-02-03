import { Router } from 'express';
class IndexRoutes {
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
const indexRoutes =  new IndexRoutes();
export default indexRoutes.router;