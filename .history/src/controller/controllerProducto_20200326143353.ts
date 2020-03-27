import { Request, Response } from 'express';
import pool from '../database';
import { Producto } from '../models/Producto';
class ControllerProducto {
    public async listAll(req: Request, res: Response) {
        const producto = await (await pool).query('SELECT * FROM producto');
        res.json(producto);
    }
    public async listOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const productoOne = await (await pool).query('SELECT * FROM producto WHERE idproducto=?', [id]);
        if (productoOne.length > 0) {
            return res.json(productoOne[0]);
        }
        res.status(404).json({ text: 'the producto not exist' })
    }
    public async create(req: Request, res: Response): Promise<any> {
        const { idCategoria, nombre, precio, stock, estado } = req.body;
        const { filename } = req.file;
        let newProducto: Producto = {
            idCategoria: idCategoria,
            nombre: nombre,
            image: '/uploads/' + filename,
            precio: precio,
            stock: stock,
            estado: estado,
            created_at: new Date            
        };
        await (await pool).query('INSERT INTO producto SET ?', [newProducto]);
        ;
        res.json({ message: 'Producto saved v' });
    }
    public async update(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const { idCategoria, nombre, precio, stock, estado } = req.body;
        const { filename } = req.file;
        
        let newProducto: Producto = {
            idCategoria: idCategoria,
            nombre: nombre,
            image: '/uploads/' + filename, // 
            precio: precio,
            stock: stock,
            estado: estado
        };
        await (await pool).query('UPDATE  producto SET ? WHERE idproducto=?', [newProducto, id]);
        res.json({ message: 'update Producto' })
    }
    public async delete(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        await (await pool).query('DELETE FROM producto WHERE idproducto=?', [id]);
        res.json({ message: 'delete Producto' })
    }
}
const controllerProducto = new ControllerProducto();
export default controllerProducto;