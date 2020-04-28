import { Request, Response } from 'express';
import pool from '../database';
import { Promocion } from '../models/Promocion';
class ControllerPromo {
    public async listAll(req: Request, res: Response) {
        const promo = await (await pool).query('SELECT * FROM promociones');
        res.json(promo);
    }
    public async listOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const promoOne = await (await pool).query('SELECT * FROM promociones WHERE idpromociones=?', [id]);
        if (promoOne.length > 0) {
            return res.json(promoOne[0]);
        }
        res.status(404).json({ text: 'the promise not exist' })
    }
    public async create(req: Request, res: Response): Promise<any> {
        const { idproducto, dto, fechainicio, fechafin, descripcion, estado,} = req.body;
        let newPromo: Promocion = {
            idproducto: idproducto,
            dto: dto,
            fechainicio: fechainicio,
            fechafin: fechafin,
            descripcion: descripcion,
            estado: estado,
            created_at: new Date            
        };
        await (await pool).query('INSERT INTO promociones SET ?', [newPromo]);
        ;
        res.json({ message: 'Promociones saved ' });
    }
    public async update(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const { idproducto, dto, fechainicio, fechafin, descripcion, estado,} = req.body;
        let newPromo: Promocion = {
            idproducto: idproducto,
            dto: dto,
            fechainicio: fechainicio,
            fechafin: fechafin,
            descripcion: descripcion,
            estado: estado,
            created_at: new Date            
        };
        await (await pool).query('UPDATE  promociones SET ? WHERE idpromociones=?', [newPromo, id]);
        res.json({ message: 'update Producto' })
    }
    public async delete(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        await (await pool).query('DELETE FROM promociones WHERE idpromociones=?', [id]);
        res.json({ message: 'delete Promociones' })
    }
}
const controllerPromo = new ControllerPromo();
export default controllerPromo;