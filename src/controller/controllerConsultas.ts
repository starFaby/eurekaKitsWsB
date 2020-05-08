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
        res.status(404).json({ text: 'the consutl pers_Direcc_Tele not exist' })
    }
    public async productouni(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const pdtOne = await (await pool).query('select * from viewproductouni where idproducto = ?', [id]);// para visualizar las promociones administrador
        if (pdtOne.length > 0) {
            return res.json(pdtOne);
        }
        res.status(404).json({ text: 'the consutl promocion_producto not exist' })
    }
    public async promocionPP(req: Request, res: Response): Promise<any> {
        const pdtOne = await (await pool).query('select * from viewpromocionespp');// para visualizar las promociones administrador
        if (pdtOne.length > 0) {
            return res.json(pdtOne);
        }
        res.status(404).json({ text: 'the consutl promocion_producto not exist' })
    }
    public async promocionPPI(req: Request, res: Response): Promise<any> {
        const pdtOne = await (await pool).query('select * from viewpromocionesppi');// para visualizar las promociones administrador
        if (pdtOne.length > 0) {
            return res.json(pdtOne);
        } else {
            res.status(204).send({ message: 'No Promociones' })
        }
    }
    public async promocionUni(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const pUniOne = await (await pool).query('select * from viewpromocionesppuni where idpromociones = ?', [id]);// para visualizar las promociones administrador
        if (pUniOne.length > 0) {
            return res.json(pUniOne);
        }
        res.status(404).json({ text: 'the consutl promocion_producto not exist' });
    }
    public async detalleVentadvp(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const pdtOne = await (await pool).query('select * from viewdetalleventadvp where  idfactura = ? ', [id]);// para visualizar detalle ventas con id de producto con su nombre
        if (pdtOne.length > 0) {
            return res.json(pdtOne);
        } else {
            return res.status(204).send({message: 'NO Datos'});
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
        const personaFactura = await (await pool).query('select * from viewpersonafactura where estado = 1 AND idpersona = ? ', [id]);// para visualizar detalle ventas con id de producto con su nombre
        if (personaFactura.length > 0) {
            return res.json(personaFactura);
        } else {
            return res.status(204).send({ message: 'No Datos' });
        }
    }
    public async onGetTipoPago(req: Request, res: Response): Promise<any> { // ver transferencia paypal efectivo
        const tipopago = await (await pool).query('SELECT * FROM viewtipopago');// para visualizar detalle ventas con id de producto con su nombre
        console.log(tipopago);
        return res.json(tipopago);
        // res.status(404).json({text: 'the consutl promocion_producto not exist'})
    }
    public async onGetPagoFactPaypal(req: Request, res: Response): Promise<any> { // ver facturas de tipo paypal
        const { id } = req.params;
        const pfpaypal = await (await pool).query('select * from viewpagofactptbe where idtipopago = 1 AND estado = 1 AND idpersona = ?', [id]);// para visualizar solo las facturas de tipo paypal
        const result = pfpaypal.length;
        if (result > 0) {
            return res.json(pfpaypal);
        } else {
            return res.status(204).send({ message: 'No Datos' });
        }
    }
    public async onGetPagoFactTransBanc(req: Request, res: Response): Promise<any> { // ver facturas de tipo transferencia bancaria
        const { id } = req.params;
        const pftransbanc = await (await pool).query('select * from viewpagofactptbe where idtipopago = 2 AND estado = 1 AND idpersona = ?', [id]);// para visualizar solo las facturas de tipo paypal
        const result = pftransbanc.length;
        if (result > 0) {
            return res.json(pftransbanc);
        } else {
            return res.status(204).send({ message: 'No Datos' });
        }
    }
    public async onGetPagoFactEfectivo(req: Request, res: Response): Promise<any> { // ver facturas de tipo efectivo
        const { id } = req.params;
        const pfefectivo = await (await pool).query('select * from viewpagofactptbe where idtipopago = 3 AND estado = 1 AND idpersona = ?', [id]);// para visualizar solo las facturas de tipo paypal
        const result = pfefectivo.length;
        if (result > 0) {
            return res.json(pfefectivo);
        } else {
            return res.status(204).send({ message: 'No Datos' });
        }
    }
    public async onGetPagoFactIndiv(req: Request, res: Response): Promise<any> { // ver por el numero de factura para guardar en paypal tranferencia bancaria y efectivo
        const { id } = req.params;
        const pfefectivoindiv = await (await pool).query('select * from viewformapagopy where numfactura = ?', [id]);// para visualizar solo las facturas de tipo paypal
        const result = pfefectivoindiv.length;
        if (result > 0) {
            return res.json(pfefectivoindiv);
        } else {
            res.status(404).send({ message: 'Error' });
        }
    }
}
const controllerConsultas = new ControllerConsultas();
export default controllerConsultas;