export interface DetalleVenta {
    iddetalleventa?: number,
    idFactura?: number,
    idProducto: number,
    cantidad: string,
    precio: number,
    total: number,
    estado: number,
    created_at?: Date,
}