import { Request, Response } from 'express';
import  pool  from '../database';
class ControllerCliente{
    public  index (req: Request, res: Response) {
     console.log('database online');
     
        res.json({faby:'eres un descgraciado soy clinte'})
    }
}
const controllerCliente = new ControllerCliente();
export default controllerCliente;