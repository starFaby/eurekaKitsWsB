export interface Factura {
    idfactura?: number,
    idpersona: number,
    idpago: number,
    subtotal: string,
    dto: number,
    iva: number,
    total: number,
    estado: number,
    created_at?: Date,
}