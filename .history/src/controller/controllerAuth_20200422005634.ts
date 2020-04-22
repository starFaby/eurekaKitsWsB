import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import  { Persona }  from '../models/Persona';
import { Login } from '../models/Auth';
import pool from '../database';
import helpers from '../libs/helpers'
import whatsapp from '../middlewares/whatsapp'
class ControllerAuth {
    public async loginUp(req: Request, res: Response): Promise<void> {
       const { idtelefono,iddireccion,cedula,nombres,apellidos,fechanacimiento,email,password,estado} = req.body;
        let newPersona: Persona = {
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
        newPersona.password = await helpers.encriptPassword(password);
        console.log(newPersona);
        const user = (await pool).query('INSERT INTO persona SET ?', [newPersona]);
        const newUser = (await user);
        console.log(newUser.insertId);
        const datesPerson = ``;
        whatsapp.whassap(datesPerson);
        const payload = { subject: newUser.insertId }
        const token = jwt.sign(payload, 'secret');
        res.status(200).send({token});
    }
    public async loginIn(req: Request, res: Response): Promise<void> {
        const { email, password } = req.body;
        const newUser: Login = {
            email: email,
            password: password
        }
        const row = (await pool).query('SElECT * FROM persona Where email = ?', [newUser.email]);
        const newrow = (await row);
        if (newrow[0] !== undefined) {
            const user = newrow[0];
            const validPassword = await helpers.matchPassword(newUser.password, user.password);
            if (validPassword) {
                console.log('PRUEBA ',user.idpersona);
                const id = user.idpersona;
                const payload = { subject: user.idpersona}
                const token = jwt.sign(payload, 'secret');
                res.status(200).send({token , id});
            } else {
                res.status(401).send('PASSWORD INCORRECTO');
            }
        } else {
            res.status(401).send('USUARIO NO ENCONTRADO');
        }
    }
}
const controllerAuth = new ControllerAuth();
export default controllerAuth;