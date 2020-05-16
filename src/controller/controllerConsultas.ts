import { Request, Response } from 'express';
import pool from '../database';
class ControllerConsultas {
    public async onGetCategoria(req: Request, res: Response): Promise<any> {
        const personall = await (await pool).query('select * from viewcategoria where estado = 1'); // lista a la persona para la cabecera de la factura
        if (personall.length > 0) {
            return res.json(personall);
        }else {
            res.status(204).json({ message: 'No Datos'});
        }
    }
    public async onGetPersona(req: Request, res: Response): Promise<any> {
        const personall = await (await pool).query('select * from viewpersona where estado = 1'); // lista a la persona para la cabecera de la factura
        if (personall.length > 0) {
            return res.json(personall);
        }else {
            res.status(204).json({ message: 'No Datos'});
        }
    }
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
    public async onGetPagoPaypal(req: Request, res: Response): Promise<any> { // ver facturas pagadas echos en paypal
        const { id } = req.params;
        const pagoPaypal = await (await pool).query('select * from viewpagopaypal where idpersona = ?', [id]);
        const result = pagoPaypal.length;
        if (result > 0) {
            return res.json(pagoPaypal);
        } else {
            res.status(204).send({ message: 'No Datos' });
        }
    }
    public async onGetPagoTransBanc(req: Request, res: Response): Promise<any> { // ver facturas pagadas echos en Transferencia Bancaria
        const { id } = req.params;
        const pagoTransBanc = await (await pool).query('select * from viewpagotrasnbanc where idpersona = ?', [id]);
        const result = pagoTransBanc.length;
        if (result > 0) {
            return res.json(pagoTransBanc);
        } else {
            res.status(204).send({ message: 'No Datos' });
        }
    }
    public async onGetPagoEfectivo(req: Request, res: Response): Promise<any> { // ver facturas pagadas echos en Efectivo
        const { id } = req.params;
        const pagoEfectivo = await (await pool).query('select * from viewpagoefectivo where idpersona = ?', [id]);
        const result = pagoEfectivo.length;
        if (result > 0) {
            return res.json(pagoEfectivo);
        } else {
            res.status(204).send({ message: 'No Datos' });
        }
    }
    public async onGetFacturadv(req: Request, res: Response): Promise<any> { // ver facturas pagadas echos en Efectivo
        const { id } = req.params;
        const facturaDv = await (await pool).query('select * from viewFacturadv where numfactura =  ?', [id]);
        const result = facturaDv.length;
        if (result > 0) {
            return res.json(facturaDv);
        } else {
            res.status(204).send({ message: 'No Datos' });
        }
    }
    public async onGetFacturaTotal(req: Request, res: Response): Promise<any> { // ver facturas pagadas echos en Efectivo
        const { id } = req.params;
        const facturaTotal = await (await pool).query('select * from viewFacturaTotal where numfactura = ?', [id]);
        const result = facturaTotal.length;
        if (result > 0) {
            return res.json(facturaTotal);
        } else {
            res.status(204).send({ message: 'No Datos' });
        }
    }
    public async onGetReportPersona(req: Request, res: Response): Promise<any> { // ver reporte de personas
        const reportPersona = await (await pool).query('select * from viewreportpersona');
        const result = reportPersona.length;
        if (result > 0) {
            return res.json(reportPersona);
        } else {
            res.status(204).send({ message: 'No Datos' });
        }
    }
    public async onGetReportCategoria(req: Request, res: Response): Promise<any> { // ver reporte de Categorias
        const reportCategoria = await (await pool).query('select * from viewreportcategoria');
        const result = reportCategoria.length;
        if (result > 0) {
            return res.json(reportCategoria);
        } else {
            res.status(204).send({ message: 'No Datos' });
        }
    }
    public async onGetReportProducto(req: Request, res: Response): Promise<any> { // ver reporte de producto
        const reportProducto = await (await pool).query('select * from viewreportproducto');
        const result = reportProducto.length;
        if (result > 0) {
            return res.json(reportProducto);
        } else {
            res.status(204).send({ message: 'No Datos' });
        }
    }
    public async onGetReportPromociones(req: Request, res: Response): Promise<any> { // ver reporte de promociones
        const reportPromo = await (await pool).query('select * from viewreportpromociones');
        const result = reportPromo.length;
        if (result > 0) {
            return res.json(reportPromo);
        } else {
            res.status(204).send({ message: 'No Datos' });
        }
    }
}
const controllerConsultas = new ControllerConsultas();
export default controllerConsultas;