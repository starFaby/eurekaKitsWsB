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
            res.json(producto);
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const productoOne = yield (yield database_1.default).query('SELECT * FROM producto WHERE idproducto=?', [id]);
            if (productoOne.length > 0) {
                return res.json(productoOne[0]);
            }
            res.status(404).json({ text: 'the producto not exist' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idCategoria, nombre, precio, stock, estado } = req.body;
            const { filename } = req.file;
            let newProducto = {
                idCategoria: idCategoria,
                nombre: nombre,
                image: '/uploads/' + filename,
                precio: precio,
                stock: stock,
                estado: estado,
                created_at: new Date
            };
            yield (yield database_1.default).query('INSERT INTO producto SET ?', [newProducto]);
            ;
            res.json({ message: 'Producto saved v' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { idCategoria, nombre, precio, stock, estado } = req.body;
            const { filename } = req.file;
            let newProducto = {
                idCategoria: idCategoria,
                nombre: nombre,
                image: '/uploads/' + filename,
                precio: precio,
                stock: stock,
                estado: estado
            };
            yield (yield database_1.default).query('UPDATE  producto SET ? WHERE idproducto=?', [newProducto, id]);
            res.json({ message: 'update Producto' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield (yield database_1.default).query('DELETE FROM producto WHERE idproducto=?', [id]);
            res.json({ message: 'delete Producto' });
        });
    }
}
const controllerProducto = new ControllerProducto();
exports.default = controllerProducto;
