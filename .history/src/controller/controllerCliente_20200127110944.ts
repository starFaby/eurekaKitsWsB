import { Request, Response } from 'express';
import  pool  from '../database';
class ControllerCliente{
    public  async index (req: Request, res: Response) {
        (await pool).query('DESCRIBE cliente');
        res.json({faby:'eres un descgraciado soy clinte'})
    }
    public async create(req:Request, res: Response){
        res.json({text: 'crear un cliente'})
    }
}
const controllerCliente = new ControllerCliente();
export default controllerCliente;