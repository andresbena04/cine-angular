export interface Menu {
    img: string,
    nombre: string,
    descripcion: string[],
    precio: number,
    categoria: string
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
export interface Cartelera {
    id: string,
    nombre: string,
    poster: string,
    nombre_original: string,
    sinopsis: string,
    director: string,
    reparto: string[],
    duracion: number,
    clasificacion: string
    url_trailer: string,
    estreno: boolean
}
export interface Proximamente {
    id: string,
    nombre: string,
    poster: string,
    fecha_estreno: Date,
    nombre_original: string,
    sinopsis: string,
    director: string,
    reparto: string[],
    duracion: number,
    clasificacion: string
    url_trailer: string
}
export interface Poster {
    nombre: string,
    img: string
}