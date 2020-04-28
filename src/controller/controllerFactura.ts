import { Request, Response } from 'express';
import pool from '../database';
import { Factura } from '../models/Factura';
class ControllerFactura {
    public async listAll(req: Request, res: Response) {
        const factura = await (await pool).query('SELECT * FROM factura');
        res.json(factura);
    }
    public async create(req: Request, res: Response): Promise<any> {
        const { idpersona, numfactura,estado } = req.body;
        let newFactura: Factura = {
            idpersona: idpersona,
            numfactura: numfactura,
            estado: estado,
            created_at: new Date,        
        };
        console.log(newFactura); 
       const newFactG = await (await pool).query('INSERT INTO factura SET ?', [newFactura]);
       const fact = (await newFactG);
       console.log(fact.insertId);
       if(fact.insertId > 0){
           const idfactura = fact.insertId;
           res.status(200).send({idfactura})
       } else {
           res.status(404).send('ERROR AL REGISTRAR');
       }
    }   
}
const controllerFactura = new ControllerFactura();
export default controllerFactura;