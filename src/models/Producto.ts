export interface Producto {
    idproducto?: number,
    idcategoria: string,
    nombre: string,
    image: File | any,
    precio: number,
    stock: number,
    estado: number,
    created_at?: Date,
}