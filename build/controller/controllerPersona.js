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
class ControllerPersona {
    listAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const persona = yield (yield database_1.default).query('SELECT * FROM persona');
            res.json(persona);
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const personaOne = yield (yield database_1.default).query('SELECT * FROM persona WHERE idpersona=?', [id]);
            if (personaOne.length > 0) {
                return res.json(personaOne[0]);
            }
            res.status(404).json({ text: 'the Persona not exist' });
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
            yield (yield database_1.default).query('INSERT INTO persona SET ?', [newPersona]);
            res.json({ message: 'Persona saved' });
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
            yield (yield database_1.default).query('UPDATE  persona SET ? WHERE idpersona=?', [newPersona, id]);
            res.json({ message: 'Update Persona' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield (yield database_1.default).query('DELETE FROM persona WHERE idpersona=?', [id]);
            res.json({ message: ' Person delete' });
        });
    }
}
const controllerPersona = new ControllerPersona();
exports.default = controllerPersona;
