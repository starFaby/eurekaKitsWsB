import { Request, Response } from 'express';
import { Cliente } from '../models/Cliente';
import pool from '../database';
class ControllerCliente {
    public async listAll(req: Request, res: Response) {
       const cliente = await (await pool).query('SELECT * FROM persona');
        res.json(cliente);
    }
    public async listOne(req: Request, res: Response): Promise<void>  {
        const { idPersona } = req.params;
        console.log(idPersona);        
        const clienteOne = await (await pool).query('SELECT * FROM persona WHERE idPersona=?',[idPersona])
        res.json(clienteOne);
    }
    public async create(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        await (await pool).query('INSERT INTO persona SET ?', [req.body]);
        res.json({ message: 'cliente saved' });
    }
    public async update(req: Request, res: Response) {
        res.json({ text: 'actualizar un cliente ' + req.params.id })
    }
    public async delete(req: Request, res: Response) {
        res.json({ text: 'delete un cliente ' + req.params.id })
    }
}
const controllerCliente = new ControllerCliente();
export default controllerCliente;