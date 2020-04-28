import { Request, Response } from 'express';
import  { Telefono }  from '../models/Telefono';
import pool from '../database';
class ControllerTelefono {
    public async listAll(req: Request, res: Response) {
        const telefono = await (await pool).query('SELECT * FROM telefono');
        res.json(telefono);
    }
    public async listOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const telefonoOne = await (await pool).query('SELECT * FROM telefono WHERE idtelefono=?', [id]);
        if (telefonoOne.length > 0) {
            return res.json(telefonoOne[0]);
        }
        res.status(404).json({text: 'the Telefono not exist'})
    }
    public async create(req: Request, res: Response): Promise<void> {
        const { domisoci,convencional,celular1,celular2,estado} = req.body;
        let newTelefono: Telefono = {
            domisoci: domisoci,
            convencional: convencional,
            celular1: celular1,
            celular2: celular2,
            estado: estado,
            created_at: new Date
        }
        await (await pool).query('INSERT INTO telefono SET ?', [newTelefono]);
        res.json({ message: 'Telefono saved' });
    }
    public async update(req: Request, res: Response) {
        const { id } = req.params;
        const {domisoci, convencional,celular1,celular2,estado} = req.body;
        let newTelefono: Telefono = {
            domisoci: domisoci,
            convencional: convencional,
            celular1: celular1,
            celular2: celular2,
            estado: estado,
            created_at: new Date
        }
        await (await pool).query('UPDATE  telefono SET ? WHERE idtelefono=?', [newTelefono, id]);
        res.json({ message: 'Update Telefono'})
    }
    public async delete(req: Request, res: Response) {
        const { id } = req.params;
        await (await pool).query('DELETE FROM telefono WHERE idtelefono=?', [id]);
        res.json({message: ' Telefono delete'})
    }
}
const controllerTelefono = new ControllerTelefono();
export default controllerTelefono;