"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ControllerProducto {
    listAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const producto = yield (yield database_1.default).query('SELECT * FROM producto');
            const result = producto.length;
            if (result > 0) {
                return res.json(producto);
            }
            else {
                return res.status(204).send({ message: 'No Encontrado' });
            }
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const productoOne = yield (yield database_1.default).query('SELECT * FROM producto WHERE idproducto=?', [id]);
            const result = productoOne.length;
            if (result > 0) {
                return res.json(productoOne);
            }
            else {
                return res.status(204).send({ message: 'No Encontrado' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idcategoria, nombre, describir, precio, stock, estado } = req.body;
            const { filename } = req.file;
            let newProducto = {
                idcategoria: idcategoria,
                nombre: nombre,
                describir: describir,
                image: '/uploads/' + filename,
                precio: precio,
                stock: stock,
                estado: estado,
                created_at: new Date
            };
            const producto = yield (yield database_1.default).query('INSERT INTO producto SET ?', [newProducto]);
            const result = producto.insertId;
            if (result > 0) {
                return res.status(200).send({ message: 'Registrado' });
            }
            else {
                return res.status(204).send({ message: 'No Registrado' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { idcategoria, nombre, describir, precio, stock, estado } = req.body;
            const { filename } = req.file;
            let newProducto = {
                idcategoria: idcategoria,
                nombre: nombre,
                describir: describir,
                image: '/uploads/' + filename,
                precio: precio,
                stock: stock,
                estado: estado,
                created_at: new Date
            };
            const producto = yield (yield database_1.default).query('UPDATE  producto SET ? WHERE idproducto=?', [newProducto, id]);
            const result = producto.affectedRows;
            if (result > 0) {
                return res.status(200).send({ message: 'Actualizado' });
            }
            else {
                return res.status(204).send({ message: 'No Actualizado' });
            }
        });
    }
    updateStock(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { stock } = req.body;
            let newStock = {
                stock: stock
            };
            const stockNew = yield (yield database_1.default).query('UPDATE  producto SET ? WHERE idproducto=?', [newStock, id]);
            const result = stockNew.affectedRows;
            if (result > 0) {
                return res.status(200).send({ message: 'Actualizado' });
            }
            else {
                return res.status(204).send({ message: 'No Actualizado' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { estado } = req.body;
            const newProducto = {
                estado: estado
            };
            const producto = yield (yield database_1.default).query('UPDATE  producto SET ? WHERE idproducto=?', [newProducto, id]);
            const result = producto.affectedRows;
            if (result > 0) {
                return res.status(200).send({ message: 'Eliminado' });
            }
            else {
                return res.status(204).send({ message: 'No Eliminado' });
            }
        });
    }
}
const controllerProducto = new ControllerProducto();
exports.default = controllerProducto;
