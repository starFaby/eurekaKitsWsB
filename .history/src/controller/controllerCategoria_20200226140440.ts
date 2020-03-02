import { Request, Response } from 'express';
import { Cliente } from '../models/Cliente';
import pool from '../database';
import { Categoria } from '../models/Categoria';
class ControllerCategoria {
    public async listAll(req: Request, res: Response) {
        const cliente = await (await pool).query('SELECT * FROM categoria');
        res.json(cliente);
    }
    public async listOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const clienteOne = await (await pool).query('SELECT * FROM categoria WHERE idCategoria=?', [id]);
        if (clienteOne.length > 0) {
            return res.json(clienteOne[0]);
        }
        res.status(404).json({ text: 'the client not exist' })
    }
    public async create(req: Request, res: Response): Promise<any> {
        const { nombre, image,  estado } = req.body;
        console.log('nombre ', nombre);
          
        console.log(req.body);
            
        const { filename } = req.file;
        let newCategoria: Categoria = {
            nombre: nombre,
            image: image,
            estado: estado
        };
       // let newCategoria: Categoria = req.body;
       // var json = JSON.parse(newCategoria);
       console.log('===> ',newCategoria);
        await (await pool).query('INSERT INTO categoria SET ?', [newCategoria]);
        ;
        res.json({ message: 'Categoria saved' });
    }
    public async update(req: Request, res: Response) {
        const { id } = req.params;
        await (await pool).query('UPDATE  categoria SET ? WHERE idCategoria=?', [req.body, id]);
        res.json({ message: 'update client' })
    }
    public async delete(req: Request, res: Response) {
        const { id } = req.params;
        await (await pool).query('DELETE FROM categoria WHERE idCategoria=?', [id]);
        res.json({ message: ' Person delete' })
    }
}
const controllerCategoria = new ControllerCategoria();
export default controllerCategoria;