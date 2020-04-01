export interface DetalleVenta {
    iddetalleventa?: number,
    id_factura: number,
    idProducto: number,
    cantidad: string,
    precio: number,
    total: number,
    estado: number,
    created_at?: Date,
}