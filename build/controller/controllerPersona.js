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
const helpers_1 = __importDefault(require("../libs/helpers"));
class ControllerPersona {
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const personaOne = yield (yield database_1.default).query('SELECT * FROM persona WHERE idpersona=?', [id]);
            if (personaOne.length > 0) {
                return res.json(personaOne[0]);
            }
            else {
                return res.status(204).send({ message: 'No Datos' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idtelefono, iddireccion, cedula, nombres, apellidos, fechanacimiento, email, password, requerimiento, estado } = req.body;
            console.log(req.body);
            let newPersona = {
                idtelefono: idtelefono,
                iddireccion: iddireccion,
                cedula: cedula,
                nombres: nombres,
                apellidos: apellidos,
                fechanacimiento: new Date(fechanacimiento),
                email: email,
                password: password,
                requerimiento: requerimiento,
                estado: estado,
                created_at: new Date
            };
            console.log(newPersona);
            newPersona.password = yield helpers_1.default.encriptPassword(password);
            const persona = yield (yield database_1.default).query('INSERT INTO persona SET ?', [newPersona]);
            const result = persona.insertId;
            if (result > 0) {
                res.status(200).send({ message: 'Persona Guardada' });
            }
            else {
                res.status(204).send({ message: 'Error al Guardar' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { idtelefono, iddireccion, cedula, nombres, apellidos, fechanacimiento, email, password, requerimiento, estado } = req.body;
            let newPersona = {
                idtelefono: idtelefono,
                iddireccion: iddireccion,
                cedula: cedula,
                nombres: nombres,
                apellidos: apellidos,
                fechanacimiento: fechanacimiento,
                email: email,
                password: password,
                requerimiento: requerimiento,
                estado: estado,
                created_at: new Date
            };
            const personaPut = yield (yield database_1.default).query('UPDATE  persona SET ? WHERE idpersona=?', [newPersona, id]);
            console.log(personaPut);
            const result = personaPut.affectedRows;
            if (result > 0) {
                res.status(200).send({ message: 'Persona Actualizada' });
            }
            else {
                res.status(204).send({ message: 'Error al Actualizada' });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { estado } = req.body;
            let newPersona = {
                estado: estado
            };
            const personDel = yield (yield database_1.default).query('UPDATE  persona SET ? WHERE idpersona=?', [newPersona, id]);
            const result = personDel.affectedRows;
            if (result > 0) {
                res.status(200).send({ message: 'Persona Delete' });
            }
            else {
                res.status(204).send({ message: 'Error al Delete' });
            }
        });
    }
}
const controllerPersona = new ControllerPersona();
exports.default = controllerPersona;
