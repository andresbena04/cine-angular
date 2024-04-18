export interface Menu {
    img: string;
    nombre: string;
    descripcion: string[];
    precio: number;
}
export interface Tarifa2D {
    dia: string,
    precio_normal: number,
    precio_tarjeta: number
}
export interface Tarifa3D {
    dia: string,
    precio_normal: number,
    precio_tarjeta: number
}
export interface Cartelera{
    nombre:string,
    poster:string,

}
export interface Proximamente{
    nombre:string,
    poster:string,
    fecha_estreno: string
}
export interface Poster{
    nombre:string,
    img:string
}