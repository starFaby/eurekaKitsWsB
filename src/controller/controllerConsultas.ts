import { Request, Response } from 'express';
import pool from '../database';
class ControllerConsultas {
    public async listOnePDT(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const pdtOne = await (await pool).query('select * from personapdt where idpersona = ?', [id]);
        if (pdtOne.length > 0) {
            return res.json(pdtOne[0]);
        }
        res.status(404).json({text: 'the consutl pers_Direcc_Tele not exist'})
    }
}
const controllerConsultas = new ControllerConsultas();
export default controllerConsultas;