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
class ControllerTelefono {
    listAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const telefono = yield (yield database_1.default).query('SELECT * FROM telefono');
            const result = telefono.length;
            if (result > 0) {
                return res.json(telefono);
            }
            else {
                return res.status(204).send({ message: 'No Encontrado' });
            }
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const telefonoOne = yield (yield database_1.default).query('SELECT * FROM telefono WHERE idtelefono=?', [id]);
            const result = telefonoOne.length;
            if (result > 0) {
                return res.json(telefonoOne);
            }
            else {
                return res.status(204).send({ message: 'No Encontrado' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { domisoci, convencional, celular1, celular2, estado } = req.body;
            let newTelefono = {
                domisoci: domisoci,
                convencional: convencional,
                celular1: celular1,
                celular2: celular2,
                estado: estado,
                created_at: new Date
            };
            const telefono = yield (yield database_1.default).query('INSERT INTO telefono SET ?', [newTelefono]);
            const result = telefono.insertId;
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
            const { domisoci, convencional, celular1, celular2, estado } = req.body;
            let newTelefono = {
                domisoci: domisoci,
                convencional: convencional,
                celular1: celular1,
                celular2: celular2,
                estado: estado,
                created_at: new Date
            };
            const telef = yield (yield database_1.default).query('UPDATE  telefono SET ? WHERE idtelefono=?', [newTelefono, id]);
            const result = telef.affectedRows;
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
            const telef = yield (yield database_1.default).query('DELETE FROM telefono WHERE idtelefono=?', [id]);
            const result = telef.affectedRows;
            if (result > 0) {
                return res.status(200).send({ message: 'Eliminado' });
            }
            else {
                return res.status(204).send({ message: 'No Eliminado' });
            }
        });
    }
}
const controllerTelefono = new ControllerTelefono();
exports.default = controllerTelefono;
