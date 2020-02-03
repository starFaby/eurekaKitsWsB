import { Request, Response } from 'express';
import { Cliente } from '../models/Cliente';
import pool from '../database';
class ControllerCliente {
    public async listAll(req: Request, res: Response) {
        // (await pool).query('DESCRIBE cliente');
        res.json({ faby: 'Todos los clientes' });
    }
    public async listOne(req: Request, res: Response) {
        res.json({ faby: 'solo un cliente ' + req.params.id });
    }
    public async create(req: Request, res: Response): Promise<void> {
        console.log(req.body);
        const { CEDULA, NOMBRES, APELLIDOS, DIRECCION, FECHANACIMIENTO, TELEFONO, EMAIL, PASWORD, ESTADO } = req.body;
        const newCliente = new Cliente({
            CEDULA,
            NOMBRES,
            APELLIDOS,
            DIRECCION,
            FECHANACIMIENTO,
            TELEFONO,
            EMAIL,
            PASWORD,
            ESTADO
        });
        (await pool).query('INSERT INTO persona SET ?', [newCliente]);
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