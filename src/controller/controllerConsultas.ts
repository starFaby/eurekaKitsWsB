import { Request, Response } from 'express';
import pool from '../database';
class ControllerConsultas {
    public async listOnePDT(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const pdtOne = await (await pool).query('select * from personapdt where idpersona = ?', [id]); // lista a la persona para la cabecera de la factura
        if (pdtOne.length > 0) {
            console.log(pdtOne)
            return res.json(pdtOne);
        }
        res.status(404).json({text: 'the consutl pers_Direcc_Tele not exist'})
    }
    public async productouni(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const pdtOne = await (await pool).query('select * from viewproductouni where idproducto = ?',[id]);// para visualizar las promociones administrador
        if (pdtOne.length > 0) {
            return res.json(pdtOne);
        }
        res.status(404).json({text: 'the consutl promocion_producto not exist'})
    }
    public async promocionPP(req: Request, res: Response): Promise<any> {
        const pdtOne = await (await pool).query('select * from viewpromocionespp');// para visualizar las promociones administrador
        if (pdtOne.length > 0) {
            return res.json(pdtOne);
        }
        res.status(404).json({text: 'the consutl promocion_producto not exist'})
    }
    public async promocionPPI(req: Request, res: Response): Promise<any> {
        const pdtOne = await (await pool).query('select * from viewpromocionesppi');// para visualizar las promociones administrador
        if (pdtOne.length > 0) {
            return res.json(pdtOne);
        }
        res.status(404).json({text: 'the consutl promocion_producto not exist'})
    }
    public async promocionUni(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const pUniOne = await (await pool).query('select * from viewpromocionesppuni where idpromociones = ?',[id]);// para visualizar las promociones administrador
        if (pUniOne.length > 0) {
            return res.json(pUniOne);
        }
        res.status(404).json({text: 'the consutl promocion_producto not exist'});
    }
    public async detalleVentadvp(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const pdtOne = await (await pool).query('select * from viewdetalleventadvp where  idfactura = ? ', [id]);// para visualizar detalle ventas con id de producto con su nombre
        if (pdtOne.length > 0) {
            return res.json(pdtOne);
        }else {
            res.status(404).send('the detalle venta not exist')
        }
    }
    public async onGetNumFactura(req: Request, res: Response): Promise<any> {
        const numFact = await (await pool).query('SELECT MAX(factura.numfactura)+1 AS numfactura FROM factura');// para visualizar detalle ventas con id de producto con su nombre
            return res.json(numFact);
       // res.status(404).json({text: 'the consutl promocion_producto not exist'})
    }
    public async onGetIdFactura(req: Request, res: Response): Promise<any> {
        const idFact = await (await pool).query('SELECT MAX(factura.idfactura)+1 AS idfactura  FROM factura');// para visualizar detalle ventas con id de producto con su nombre
            return res.json(idFact);
       // res.status(404).json({text: 'the consutl promocion_producto not exist'})
    }

    public async onGetPersonaFactura(req: Request, res: Response): Promise<any> { // visualizar que cada persona tiene sus propias facturas
        const { id } = req.params;
        const personaFactura = await (await pool).query('select * from viewpersonafactura where idpersona = ? ', [id]);// para visualizar detalle ventas con id de producto con su nombre
        if (personaFactura.length > 0) {
            return res.json(personaFactura);
        }else {
            res.status(404).send({message: 'No existe facturas para este cliente'});
        }
    }
    public async onGetTipoPago(req: Request, res: Response): Promise<any> { // ver transferencia paypal efectivo
        const tipopago = await (await pool).query('SELECT * FROM viewtipopago');// para visualizar detalle ventas con id de producto con su nombre
        console.log(tipopago);
        return res.json(tipopago);
       // res.status(404).json({text: 'the consutl promocion_producto not exist'})
    }
}
const controllerConsultas = new ControllerConsultas();
export default controllerConsultas;