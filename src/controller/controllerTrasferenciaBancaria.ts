import { Request, Response } from 'express';
import pool from '../database';
import { TrasnferenciaBancaria } from '../models/TransferenciaBancaria';
class ControllerTrasnferenciaBancaria {

    public async create(req: Request, res: Response): Promise<any> {
        const { idformapago, numfactura, preciofactura, image, estado } = req.body;
        let newTrasnferenciaBancaria: TrasnferenciaBancaria = {
            idformapago: idformapago,
            numfactura: numfactura, 
            preciofactura: preciofactura,
            image: image,
            estado: estado,
            created_at: new Date
        };
        const transferenciabancaria = await (await pool).query('INSERT INTO transferenciabancaria SET ?', [newTrasnferenciaBancaria]);
        const result = transferenciabancaria.insertId;
        if(result > 0){
            res.status(200).send({message: 'Registro exitoso'});
        }else {
            res.status(404).send({message: 'Error exitoso'});
        }
    }
}
const controllerTrasnferenciaBancaria = new ControllerTrasnferenciaBancaria();
export default controllerTrasnferenciaBancaria;