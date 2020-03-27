import { Request, Response } from 'express';
import pool from '../database';
import { Categoria } from '../models/Categoria';
class ControllerCategoria {
    public async listOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const clienteOne = await (await pool).query('SELECT * FROM producto WHERE idcategoria=?', [id]);
        if (clienteOne.length > 0) {
            return res.json(clienteOne[0]);
        }
        res.status(404).json({ text: 'the Productos no encontrado' })
    }
}
const controllerCategoria = new ControllerCategoria();
export default controllerCategoria;