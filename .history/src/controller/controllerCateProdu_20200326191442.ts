import { Request, Response } from 'express';
import pool from '../database';
class ControllerCateProdu {
    public async listOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const clienteOne = await (await pool).query('SELECT * FROM producto WHERE idcategoria=?', [id]);
        if (clienteOne.length > 0) {
            return res.json(clienteOne);
        }
        res.status(404).json({ text: 'the Productos no encontrado' })
    }
}
const controllerCateProdu = new ControllerCateProdu();
export default controllerCateProdu;