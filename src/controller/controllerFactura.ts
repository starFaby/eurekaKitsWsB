import { Request, Response } from 'express';
import pool from '../database';
import { Factura } from '../models/Factura';
class ControllerFactura {
    public async listAll(req: Request, res: Response) {
        const factura = await (await pool).query('SELECT * FROM factura');
        res.json(factura);
    }
    public async create(req: Request, res: Response): Promise<any> {
        const { idpersona, numfactura, subtotal,dto,iva, total, estado } = req.body;
        console.log(req.body);        
        let newFactura: Factura = {
            idpersona: idpersona,
            numfactura: numfactura,
            subtotal: subtotal,
            dto: dto,
            iva: iva,
            total: total,
            estado: estado,
            created_at: new Date,        
        };
        console.log(newFactura); 
        await (await pool).query('INSERT INTO factura SET ?', [newFactura]);
        ;
        res.json({ message: 'Factura Saved' });
    }   
}
const controllerFactura = new ControllerFactura();
export default controllerFactura;