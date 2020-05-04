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
        const newFactura: Factura = {
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
    
    public async update(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const { subtotal, dto, iva, total } = req.body;
        const newFactura: Factura = {
            subtotal: subtotal,
            dto: dto,
            iva: iva,
            total: total
        };
        console.log(newFactura);
       const fact = await (await pool).query('UPDATE  factura SET ? WHERE idfactura=?', [newFactura, id]);
       const result = fact.affectedRows;
       if(result > 0){
            res.status(200).send({message: 'Exito al actualizar'});
        }else{
            res.status(404).send({message: 'Error al actualizar'});;
        }
    }
    public async updateEstado(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const { estado } = req.body;
        const newFactura: Factura = {
            estado: estado,
        };
        console.log(newFactura);
       const factEstado = await (await pool).query('UPDATE  factura SET ? WHERE idfactura=?', [newFactura, id]);
       const result = factEstado.affectedRows;
       if(result > 0){
            res.status(200).send({message: 'Exito al actualizar'});
        }else{
            res.status(404).send({message: 'Error al actualizar'});;
        }
    }
}
const controllerFactura = new ControllerFactura();
export default controllerFactura;