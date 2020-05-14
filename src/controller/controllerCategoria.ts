import { Request, Response } from 'express';
import pool from '../database';
import { Categoria } from '../models/Categoria';
class ControllerCategoria {
    public async listAll(req: Request, res: Response) {
        const cliente = await (await pool).query('SELECT * FROM categoria');
        res.json(cliente);
    }
    public async listOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const clienteOne = await (await pool).query('SELECT * FROM categoria WHERE idcategoria=?', [id]);
        if (clienteOne.length > 0) {
            return res.json(clienteOne[0]);
        }
        res.status(404).json({ text: 'the client not exist' })
    }
    public async create(req: Request, res: Response): Promise<any> {
        const { nombre, estado } = req.body;
         const { filename } = req.file;
        console.log(filename);
        const newCategoria: Categoria = {
            nombre: nombre,
            image: '/uploads/'+filename,
            estado: estado,
            created_at: new Date
        };
        console.log(newCategoria);
        await (await pool).query('INSERT INTO categoria SET ?', [newCategoria]);
        res.json({ message: 'Categoria saved v' });
    }
    public async update(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const { nombre, estado } = req.body;
        const { filename } = req.file;
        let newCategoria: Categoria = {
            nombre: nombre,
            image: '/uploads/' + filename,
            estado: estado
        };
        await (await pool).query('UPDATE  categoria SET ? WHERE idcategoria=?', [newCategoria, id]);
        res.json({ message: 'update Categoria' })
    }
    public async delete(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const { estado } = req.body;
        let newCategoria: Categoria = {
            estado: estado
        }
        const categoriaPut = await (await pool).query('UPDATE  categoria SET ? WHERE idcategoria=?', [newCategoria, id]);
        const result = categoriaPut.affectedRows;
        if(result > 0){
            res.status(200).send({message: 'Categoria Delete'});
        } else {
            res.status(204).send({message: 'Error al Delete'});
        }
    }
}
const controllerCategoria = new ControllerCategoria();
export default controllerCategoria;