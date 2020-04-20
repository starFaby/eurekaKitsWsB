import { Request, Response } from 'express';
import  { Direccion }  from '../models/Direccion';
import pool from '../database';
class ControllerDireccion {
    public async listAll(req: Request, res: Response) {
        const direccion = await (await pool).query('SELECT * FROM direccion');
        res.json(direccion);
    }
    public async listOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const direccionOne = await (await pool).query('SELECT * FROM direccion WHERE iddireccion=?', [id]);
        if (direccionOne.length > 0) {
            return res.json(direccionOne[0]); 
        }
        res.status(404).json({text: 'the Persona not exist'})
    }
    public async create(req: Request, res: Response): Promise<void> {
        const { provincia,canton,parroquia,sector,calleprincipal,numeracion,callesecundaria,descripcion,estado} = req.body;
        let newDireccion: Direccion = {
            provincia: provincia,
            canton: canton,
            parroquia: parroquia,
            sector: sector,
            calleprincipal: calleprincipal,
            numeracion: numeracion,
            callesecundaria: callesecundaria,
            descripcion: descripcion,
            estado: estado,
            created_at: new Date
        }
        await (await pool).query('INSERT INTO direccion SET ?', [newDireccion]);
        res.json({ message: 'Direccion saved' });
    }
    public async update(req: Request, res: Response) {
        const { id } = req.params;
        const { provincia,canton,parroquia,sector,calleprincipal,numeracion,callesecundaria,descripcion,estado} = req.body;
        console.log(req.body);
        
        let newDireccion: Direccion = {
            provincia: provincia,
            canton: canton,
            parroquia: parroquia,
            sector: sector,
            calleprincipal: calleprincipal,
            numeracion: numeracion,
            callesecundaria: callesecundaria,
            descripcion: descripcion,
            estado: estado,
            created_at: new Date
        }
        await (await pool).query('UPDATE  direccion SET ? WHERE iddireccion=?', [newDireccion, id]);
        res.json({ message: 'Update Direccion'})
    }
    public async delete(req: Request, res: Response) {
        const { id } = req.params;
        await (await pool).query('DELETE FROM direccion WHERE iddireccion=?', [id]);
        res.json({message: ' Direccion delete'})
    }
}
const controllerDireccion = new ControllerDireccion();
export default controllerDireccion;