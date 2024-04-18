import { Injectable } from '@angular/core';
import { Tarifa2D, Tarifa3D } from '../models/models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarifasService {

  constructor() { }
  getTarifa2D(): Observable<Tarifa2D[]> {
    const precio_normal = 10.000
    const precio_tarjeta = 9.000
    const tarifa2D: Tarifa2D[] = [
      {
        dia:"Lunes",
        precio_normal:precio_normal,
        precio_tarjeta:precio_tarjeta
      },
      {
        dia:"Martes",
        precio_normal:precio_normal,
        precio_tarjeta:precio_tarjeta/2
      },
      {
        dia:"Miércoles",
        precio_normal:precio_normal,
        precio_tarjeta:precio_tarjeta/2
      },
      {
        dia:"Jueves",
        precio_normal:precio_normal,
        precio_tarjeta:precio_tarjeta
      },
      {
        dia:"Viernes",
        precio_normal:precio_normal,
        precio_tarjeta:precio_tarjeta
      },
      {
        dia:"Sábado",
        precio_normal:precio_normal,
        precio_tarjeta:precio_tarjeta
      },
      {
        dia:"Domingo",
        precio_normal:precio_normal,
        precio_tarjeta:precio_tarjeta
      }
    ];

    return of(tarifa2D); 
  }
  getTarifa3D(): Observable<Tarifa3D[]> {
    const precio_normal = 14.000
    const precio_tarjeta = 13.000
    const tarifa3D: Tarifa3D[] = [
      {
        dia:"Lunes",
        precio_normal:precio_normal,
        precio_tarjeta:precio_tarjeta
      },
      {
        dia:"Martes",
        precio_normal:precio_normal,
        precio_tarjeta:precio_tarjeta/2
      },
      {
        dia:"Miércoles",
        precio_normal:precio_normal,
        precio_tarjeta:precio_tarjeta/2
      },
      {
        dia:"Jueves",
        precio_normal:precio_normal,
        precio_tarjeta:precio_tarjeta
      },
      {
        dia:"Viernes",
        precio_normal:precio_normal,
        precio_tarjeta:precio_tarjeta
      },
      {
        dia:"Sábado",
        precio_normal:precio_normal,
        precio_tarjeta:precio_tarjeta
      },
      {
        dia:"Domingo",
        precio_normal:precio_normal,
        precio_tarjeta:precio_tarjeta
      }
    ];

    return of(tarifa3D); 
  }
}
