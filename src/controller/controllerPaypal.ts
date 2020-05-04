import { Request, Response } from 'express';
import pool from '../database';
import { Paypal } from '../models/Paypal';
class ControllerPaypal {

    public async create(req: Request, res: Response): Promise<any> {
        const { idformapago, numfactura, preciofactura, estado } = req.body;
        let newPaypal: Paypal = {
            idformapago: idformapago,
            numfactura: numfactura, 
            preciofactura: preciofactura,
            estado: estado,
            created_at: new Date
        };
        const paypal = await (await pool).query('INSERT INTO paypal SET ?', [newPaypal]);
        const result = paypal.insertId;
        if(result > 0){
            res.status(200).send({message: 'Registro exitoso'});
        }else {
            res.status(404).send({message: 'Error exitoso'});
        }
    }
}
const controllerPaypal = new ControllerPaypal();
export default controllerPaypal;