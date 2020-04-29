import { Request, Response } from 'express';
import pool from '../database';
import { FormaPago } from '../models/FormaPago';
class ControllerFormaPago {

    public async createfp(req: Request, res: Response): Promise<any> { // creacion de forma de pago
        const { idfactura,idtipopago, estado } = req.body;
        let newFormaPago: FormaPago = {
            idfactura: idfactura,
            idtipopago: idtipopago,
            estado: estado,
            created_at: new Date
        };
        console.log(newFormaPago);
        const fp = await (await pool).query('INSERT INTO formapago SET ?', [newFormaPago]);
        const result = fp.affectedRows;
        if(result > 0){
            res.status(200).send({message: 'Exito Guarado'});
        }else {
            res.status(404).send({message: 'Error al registrar'});
        }
    }
    
}
const controllerFormaPago = new ControllerFormaPago();
export default controllerFormaPago;