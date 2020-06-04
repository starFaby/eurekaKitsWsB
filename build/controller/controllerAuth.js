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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const database_1 = __importDefault(require("../database"));
const helpers_1 = __importDefault(require("../libs/helpers"));
const whatsapp_1 = __importDefault(require("../middlewares/whatsapp"));
class ControllerAuth {
    loginUp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idtelefono, iddireccion, cedula, nombres, apellidos, fechanacimiento, email, password, requerimiento, estado } = req.body;
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
            newPersona.password = yield helpers_1.default.encriptPassword(password);
            const user = (yield database_1.default).query('INSERT INTO persona SET ?', [newPersona]);
            const newUser = (yield user);
            const result = newUser.insertId;
            if (result > 0) {
                const datesPerson = `${newPersona.nombres}/${newPersona.apellidos}/${newPersona.cedula}/${newPersona.idtelefono}/${newPersona.requerimiento}`;
                whatsapp_1.default.whassap(datesPerson);
                const payload = { subject: newUser.insertId };
                const token = jsonwebtoken_1.default.sign(payload, 'secret');
                return res.status(200).send({ token });
            }
            else {
                return res.status(204).send('ERROR AL REGISTRAR');
            }
        });
    }
    loginIn(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const newUser = {
                email: email,
                password: password
            };
            const row = (yield database_1.default).query('SElECT * FROM persona Where email = ?', [newUser.email]);
            const newrow = (yield row);
            if (newrow[0] !== undefined) {
                const user = newrow[0];
                const validPassword = yield helpers_1.default.matchPassword(newUser.password, user.password);
                if (validPassword) {
                    const id = user.idpersona;
                    const payload = { subject: id };
                    const token = jsonwebtoken_1.default.sign(payload, 'secret');
                    return res.status(200).send({ token });
                }
                else {
                    return res.status(409).send({ message: 'password invalido' });
                }
            }
            else {
                return res.status(404).send({ message: 'No existe el usuario' });
            }
        });
    }
}
const controllerAuth = new ControllerAuth();
exports.default = controllerAuth;
