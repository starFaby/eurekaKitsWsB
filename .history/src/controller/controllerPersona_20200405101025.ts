import { Request, Response } from 'express';
import  { Persona }  from '../models/Persona';
import pool from '../database';
class ControllerPersona {
    public async listAll(req: Request, res: Response) {
        const persona = await (await pool).query('SELECT * FROM persona');
        res.json(persona);
    }
    public async listOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const personaOne = await (await pool).query('SELECT * FROM persona WHERE idpersona=?', [id]);
        if (personaOne.length > 0) {
            return res.json(personaOne[0]);
        }
        res.status(404).json({text: 'the Persona not exist'})
    }
    public async create(req: Request, res: Response): Promise<void> {
        const { idtelefono,iddireccion,cedula,nombres,apellidos,fechanacimiento,email,password,estado} = req.body;
        console.log(req.body);        
        let newPersona: Persona = {
            idtelefono: idtelefono,
            iddireccion: iddireccion,
            cedula: cedula,
            nombres: nombres,
            apellidos: apellidos,
            fechanacimiento: fechanacimiento,
            email: email,
            password: password,
            estado: estado,
            created_at: new Date
        };
        console.log(newPersona);
        await (await pool).query('INSERT INTO persona SET ?', [newPersona]);
        res.json({ message: 'Persona saved' });
    }
    public async update(req: Request, res: Response) {
        const { id } = req.params;
        const { idtelefono,iddireccion,cedula,nombres,apellidos,fechanacimiento,email,password,estado} = req.body;
        let newPersona: Persona = {
            idtelefono: idtelefono,
            iddireccion: iddireccion,
            cedula: cedula,
            nombres: nombres,
            apellidos: apellidos,
            fechanacimiento: fechanacimiento,
            email: email,
            password: password,
            estado: estado,
            created_at: new Date
        }
        await (await pool).query('UPDATE  persona SET ? WHERE idpersona=?', [newPersona, id]);
        res.json({ message: 'Update Persona'})
    }
    public async delete(req: Request, res: Response) {
        const { id } = req.params;
        await (await pool).query('DELETE FROM persona WHERE idpersona=?', [id]);
        res.json({message: ' Person delete'})
    }
}
const controllerPersona = new ControllerPersona();
export default controllerPersona;