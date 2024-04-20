import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextoService {

  constructor(private http: HttpClient) { }

  getTarjetaCliente(): Observable<any> {
    return this.http.get<any>('assets/text/tarjeta.json');
  }

  getPublicidad(): Observable<any> {
    return this.http.get<any>('assets/text/publicidad.json');
  }

  getConocenos(): Observable<any> {
    return this.http.get<any>('assets/text/conocenos.json');
  }

  getTerminosCondiciones(): Observable<any> {
    return this.http.get<any>('assets/text/terminos_condiciones.json');
  }
  getServicios(): Observable<any> {
    return this.http.get<any>('assets/text/servicios.json');
  }
}
