import { Request, Response } from 'express';
import pool from '../database';
class ControllerCateProdu {
    public async listOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const clienteOne = await (await pool).query('SELECT * FROM producto WHERE idcategoria=?', [id]);
        console.log(clienteOne.length);
        if (clienteOne.length > 0) {
            return res.json(clienteOne);
        } else {
            return res.status(204).send({ message: 'No Productos' })
        }
    }
}
const controllerCateProdu = new ControllerCateProdu();
export default controllerCateProdu;