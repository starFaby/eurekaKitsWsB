import { Request, Response } from 'express';
import { Cliente } from '../models/Cliente';
import pool from '../database';
class ControllerCliente {
    public async listAll(req: Request, res: Response) {
        const cliente = await (await pool).query('SELECT * FROM persona');
        res.json(cliente);
    }
    public async listOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const clienteOne = await (await pool).query('SELECT * FROM persona WHERE idPersona=?', [id]);
        if (clienteOne.length > 0) {
            return res.json(clienteOne[0]);
        }
        res.status(404).json({text: 'the client not exist'})
    }
    public async create(req: Request, res: Response): Promise<void> {
        await (await pool).query('INSERT INTO persona SET ?', [req.body]);
        res.json({ message: 'cliente saved' });
    }
    public async update(req: Request, res: Response) {
        res.json({ text: 'actualizar un cliente ' + req.params.id })
    }
    public async delete(req: Request, res: Response) {
        const { id } = req.params;
        await (await pool).query('DELETE FROM persona WHERE idPersona=?', [id]);
        res.json({message: ' Person delete'})
    }
}
const controllerCliente = new ControllerCliente();
export default controllerCliente;