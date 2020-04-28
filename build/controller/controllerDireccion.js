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
class ControllerDireccion {
    listAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const direccion = yield (yield database_1.default).query('SELECT * FROM direccion');
            res.json(direccion);
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const direccionOne = yield (yield database_1.default).query('SELECT * FROM direccion WHERE iddireccion=?', [id]);
            if (direccionOne.length > 0) {
                return res.json(direccionOne[0]);
            }
            res.status(404).json({ text: 'the Persona not exist' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { domisoci, provincia, canton, parroquia, sector, calleprincipal, numeracion, callesecundaria, descripcion, estado } = req.body;
            let newDireccion = {
                domisoci: domisoci,
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
            };
            yield (yield database_1.default).query('INSERT INTO direccion SET ?', [newDireccion]);
            res.json({ message: 'Direccion saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { domisoci, provincia, canton, parroquia, sector, calleprincipal, numeracion, callesecundaria, descripcion, estado } = req.body;
            console.log(req.body);
            let newDireccion = {
                domisoci: domisoci,
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
            };
            yield (yield database_1.default).query('UPDATE  direccion SET ? WHERE iddireccion=?', [newDireccion, id]);
            res.json({ message: 'Update Direccion' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield (yield database_1.default).query('DELETE FROM direccion WHERE iddireccion=?', [id]);
            res.json({ message: ' Direccion delete' });
        });
    }
}
const controllerDireccion = new ControllerDireccion();
exports.default = controllerDireccion;
