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
    public async updateEstado(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const { estado } = req.body;
        const newFormaPago: FormaPago = {
            estado: estado,
        };
        console.log('Estas en el backend');
        console.log('id');
        console.log(id);
        console.log('EStado');
        console.log(newFormaPago);
       const formaPagoEstado = await (await pool).query('UPDATE  formapago SET ? WHERE idformapago=?', [newFormaPago, id]);
       const result = formaPagoEstado.affectedRows;
       if(result > 0){
            res.status(200).send({message: 'Exito al actualizar'});
        }else{
            res.status(404).send({message: 'Error al actualizar'});;
        }
    }
    
}
const controllerFormaPago = new ControllerFormaPago();
export default controllerFormaPago;