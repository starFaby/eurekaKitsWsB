export interface Producto {
    idProducto?: number,
    idCategoria: string,
    nombre: string,
    image: string,
    precio: number,
    stock: number,
    estado: number,
    created_at?: Date,
}