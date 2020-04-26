import { Request, Response } from 'express';
import pool from '../database';
import { FormaPago } from '../models/FormaPago';
class ControllerFormaPago {

    public async createfp(req: Request, res: Response): Promise<any> { // creacion de forma de pago
        const { idfactura,nombre, estado } = req.body;
        let newFormaPago: FormaPago = {
            idfactura: idfactura,
            nombre: nombre,
            estado: estado,
            created_at: new Date
        };
        console.log(newFormaPago);
        await (await pool).query('INSERT INTO formapago SET ?', [newFormaPago]);
        res.json({ message: 'FormaPago saved v' });
    }
    
}
const controllerFormaPago = new ControllerFormaPago();
export default controllerFormaPago;