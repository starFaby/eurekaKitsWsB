import { Request, Response } from 'express';
import pool from '../database';
import { Efectivo } from '../models/Efectivo';
class ControllerEfectivo{

    public async create(req: Request, res: Response): Promise<any> {
        const { idformapago, numfactura, preciofactura, estado } = req.body;
        let newEfectivo: Efectivo = {
            idformapago: idformapago,
            numfactura: numfactura,
            preciofactura: preciofactura,
            estado: estado, 
            created_at: new Date
        };
        const efect = await (await pool).query('INSERT INTO efectivo SET ?', [newEfectivo]);
        const result = efect.insertId;
        if(result > 0){
            res.status(200).send({message: 'Registro exitoso'});
        }else {
            res.status(404).send({message: 'Error exitoso'});
        }
    }
}
const controllerEfectivo = new ControllerEfectivo();
export default controllerEfectivo;