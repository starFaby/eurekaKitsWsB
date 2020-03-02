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
        const productoOne = await (await pool).query('SELECT * FROM producto WHERE idProducto=?', [id]);
        if (productoOne.length > 0) {
            return res.json(productoOne[0]);
        }
        res.status(404).json({ text: 'the producto not exist' })
    }
    public async create(req: Request, res: Response): Promise<any> {
        const { nombre, estado } = req.body;
        const { filename } = req.file;
        let newProducto: Producto = {
            idCategoria: '',
            nombre: nombre,
            image: '/uploads/' + filename,
            precio: 0,
            stock: 0,
            estado: estado,
            created_at: new Date            
        };
        await (await pool).query('INSERT INTO producto SET ?', [newProducto]);
        ;
        res.json({ message: 'Producto saved v' });
    }
    public async update(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const { idProducto, nombre, precio, stock, estado } = req.body;
       // const { filename } = req.file;
      //  console.log('======> ', filename);
        let newProducto: Producto = {
            idCategoria: idProducto,
            nombre: nombre,
            image: '/uploads/', // + filename
            precio: precio,
            stock: stock,
            estado: estado
        };
        console.log('======> ', newProducto);
        await (await pool).query('UPDATE  producto SET ? WHERE idProducto=?', [newProducto, id]);
        res.json({ message: 'update Producto' })
    }
    public async delete(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        await (await pool).query('DELETE FROM producto WHERE idProducto=?', [id]);
        res.json({ message: 'delete Producto' })
    }
}
const controllerProducto = new ControllerProducto();
export default controllerProducto;