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
class ControllerAuth {
    loginUp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idtelefono, iddireccion, cedula, nombres, apellidos, fechanacimiento, email, password, estado } = req.body;
            let newPersona = {
                idtelefono: idtelefono,
                iddireccion: iddireccion,
                cedula: cedula,
                nombres: nombres,
                apellidos: apellidos,
                fechanacimiento: new Date(fechanacimiento),
                email: email,
                password: password,
                estado: estado,
                created_at: new Date
            };
            newPersona.password = yield helpers_1.default.encriptPassword(password);
            const user = (yield database_1.default).query('INSERT INTO persona SET ?', [newPersona]);
            const newUser = (yield user);
            if (newUser.insertId > 0) {
                console.log('despues de guradr', newPersona);
                // const datesPerson = `${newPersona.nombres}-${newPersona.apellidos}-${newPersona.cedula}-${newPersona.idtelefono}`;
                //  whatsapp.whassap(datesPerson);
                console.log('whassap bloqueado por pruebas');
                const payload = { subject: newUser.insertId };
                const token = jsonwebtoken_1.default.sign(payload, 'secret');
                res.status(200).send({ token });
            }
            else {
                res.status(404).send('ERROR AL REGISTRAR');
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
                    console.log('PRUEBA ', user.idpersona);
                    const id = user.idpersona;
                    const payload = { subject: user.idpersona };
                    const token = jsonwebtoken_1.default.sign(payload, 'secret');
                    res.status(200).send({ token, id });
                }
                else {
                    res.status(401).send('PASSWORD INCORRECTO');
                }
            }
            else {
                res.status(401).send('USUARIO NO ENCONTRADO');
            }
        });
    }
}
const controllerAuth = new ControllerAuth();
exports.default = controllerAuth;