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
        let newCategoria: Categoria = {
            nombre: nombre,
            image: '/uploads/' + filename,
            estado: estado
        };
        await (await pool).query('INSERT INTO categoria SET ?', [newCategoria]);
        ;
        res.json({ message: 'Categoria saved v' });
    }
    public async update(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const { nombre, estado } = req.body;
        const { filename } = req.file;
        console.log('======> ', filename);
        let newCategoria: Categoria = {
            nombre: nombre,
            image: '/uploads/' + filename,
            estado: estado
        };
        console.log('======> ', newCategoria);
        await (await pool).query('UPDATE  categoria SET ? WHERE idcategoria=?', [newCategoria, id]);
        res.json({ message: 'update Categoria' })
    }
    public async delete(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        await (await pool).query('DELETE FROM categoria WHERE idcategoria=?', [id]);
        res.json({ message: 'delete Categoria' })
    }
}
const controllerCategoria = new ControllerCategoria();
export default controllerCategoria;