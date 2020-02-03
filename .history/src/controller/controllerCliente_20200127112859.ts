import { Request, Response } from 'express';
import pool from '../database';
class ControllerCliente {
    public async listAll(req: Request, res: Response) {
        (await pool).query('DESCRIBE cliente');
        res.json({ faby: 'eres un descgraciado soy clinte' })
    }
    public async listOne(req: Request, res: Response) {
        (await pool).query('DESCRIBE cliente');
        res.json({ faby: 'eres un descgraciado soy clinte' })
    }
    public async create(req: Request, res: Response) {
        res.json({ text: 'crear un cliente' })
    }
    public async update(req: Request, res: Response) {
        res.json({ text: 'actualizar un cliente ' + req.params.id})
    }
    public async delete(req: Request, res: Response) {
        res.json({ text: 'delete un cliente '  + req.params.id })
    }
}
const controllerCliente = new ControllerCliente();
export default controllerCliente;