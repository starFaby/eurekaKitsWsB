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
            res.json(telefono);
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const telefonoOne = yield (yield database_1.default).query('SELECT * FROM telefono WHERE idtelefono=?', [id]);
            if (telefonoOne.length > 0) {
                return res.json(telefonoOne[0]);
            }
            res.status(404).json({ text: 'the Telefono not exist' });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { convencional, celular1, celular2, estado } = req.body;
            let newTelefono = {
                convencional: convencional,
                celular1: celular1,
                celular2: celular2,
                estado: estado,
                created_at: new Date
            };
            yield (yield database_1.default).query('INSERT INTO telefono SET ?', [newTelefono]);
            res.json({ message: 'Telefono saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const { convencional, celular1, celular2, estado } = req.body;
            let newTelefono = {
                convencional: convencional,
                celular1: celular1,
                celular2: celular2,
                estado: estado,
                created_at: new Date
            };
            yield (yield database_1.default).query('UPDATE  telefono SET ? WHERE idtelefono=?', [newTelefono, id]);
            res.json({ message: 'Update Telefono' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield (yield database_1.default).query('DELETE FROM telefono WHERE idtelefono=?', [id]);
            res.json({ message: ' Telefono delete' });
        });
    }
}
const controllerTelefono = new ControllerTelefono();
exports.default = controllerTelefono;
