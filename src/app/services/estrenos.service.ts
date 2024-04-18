import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cartelera, Poster, Proximamente } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class EstrenosService {

  constructor() { }

  getEstrenos(): Observable<Cartelera[]> {
    const cartelera: Cartelera[] = [
      {
        poster:"https://i.ibb.co/VWtbXWz/360-F-334832255-IMxvz-YRygjd20-Vl-Sa-IAFZr-QWjoz-QH6-BQ.jpg",
        nombre:"Pelicula 1"
      },
      {
        poster:"https://i.ibb.co/VWtbXWz/360-F-334832255-IMxvz-YRygjd20-Vl-Sa-IAFZr-QWjoz-QH6-BQ.jpg",
        nombre:"Pelicula 2"
      },
      {
        poster:"https://i.ibb.co/VWtbXWz/360-F-334832255-IMxvz-YRygjd20-Vl-Sa-IAFZr-QWjoz-QH6-BQ.jpg",
        nombre:"Pelicula 3"
      },{
        poster:"https://i.ibb.co/VWtbXWz/360-F-334832255-IMxvz-YRygjd20-Vl-Sa-IAFZr-QWjoz-QH6-BQ.jpg",
        nombre:"Pelicula 4"
      },
      {
        poster:"https://i.ibb.co/VWtbXWz/360-F-334832255-IMxvz-YRygjd20-Vl-Sa-IAFZr-QWjoz-QH6-BQ.jpg",
        nombre:"Pelicula 5"
      }
    ];

    return of(cartelera); 
  }
  getProximos(): Observable<Proximamente[]> {
    const proximo_estreno: Proximamente[] = [
      {
        poster:"https://i.ibb.co/VWtbXWz/360-F-334832255-IMxvz-YRygjd20-Vl-Sa-IAFZr-QWjoz-QH6-BQ.jpg",
        nombre:"Pelicula 1",
        fecha_estreno: "28/04/2024"
      },
      {
        poster:"https://i.ibb.co/VWtbXWz/360-F-334832255-IMxvz-YRygjd20-Vl-Sa-IAFZr-QWjoz-QH6-BQ.jpg",
        nombre:"Pelicula 2",
        fecha_estreno: "05/05/2024"
      },
      {
        poster:"https://i.ibb.co/VWtbXWz/360-F-334832255-IMxvz-YRygjd20-Vl-Sa-IAFZr-QWjoz-QH6-BQ.jpg",
        nombre:"Pelicula 3",
        fecha_estreno: "12/05/2024"
      },{
        poster:"https://i.ibb.co/VWtbXWz/360-F-334832255-IMxvz-YRygjd20-Vl-Sa-IAFZr-QWjoz-QH6-BQ.jpg",
        nombre:"Pelicula 4",
        fecha_estreno: "22/06/2024"
      },
      {
        poster:"https://i.ibb.co/VWtbXWz/360-F-334832255-IMxvz-YRygjd20-Vl-Sa-IAFZr-QWjoz-QH6-BQ.jpg",
        nombre:"Pelicula 5",
        fecha_estreno: "29/06/2024"
      },
      {
        poster:"https://i.ibb.co/VWtbXWz/360-F-334832255-IMxvz-YRygjd20-Vl-Sa-IAFZr-QWjoz-QH6-BQ.jpg",
        nombre:"Pelicula 6",
        fecha_estreno: "29/06/2024"
      }
    ];

    return of(proximo_estreno); 
  }
  getPoster(): Observable<Poster[]> {
    const poster: Poster[] = [
      {
        img:"https://i.ibb.co/XxD6TXD/image-not-available.png",
        nombre:"Pelicula 1",
      },
      {
        img:"https://i.ibb.co/FKH255h/noimagethumb.jpg",
        nombre:"Pelicula 2",
      },
      {
        img:"https://i.ibb.co/XxD6TXD/image-not-available.png",
        nombre:"Pelicula 3",
      },
      {
        img:"https://i.ibb.co/FKH255h/noimagethumb.jpg",
        nombre:"Pelicula 4",
      }
      
    ];

    return of(poster); 
  }
}
