import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Menu } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class CafeteriaService {

  constructor() { }

  getCafeteria(): Observable<Menu[]> {
    const menu: Menu[] = [
      {
        img:"https://i.ibb.co/HF8shrG/combo1.png",
        nombre:"Combo 1",
        descripcion:["1 Chrispeta PQ","1 Gaseosa 16 ONZ","1 Chocolatina"],
        precio: 14.000,
        categoria: "combo"
      },
      {
        img:"https://i.ibb.co/cDqVpfD/combo2.png",
        nombre:"Combo 2",
        descripcion:["2 Chrispeta PQ","2 Gaseosa 16 ONZ","2 Chocolatinas"],
        precio: 27.000,
        categoria: "combo"
      },
      {
        img:"https://i.ibb.co/cJHFqSd/combo3.png",
        nombre:"Combo 3",
        descripcion:["1 Chrispeta mediana","1 Gaseosa 16 ONZ","1 Chocolatina"],
        precio: 20.000,
        categoria: "combo"
      },
      {
        img:"https://i.ibb.co/R6WC2RM/combo4.png",
        nombre:"Combo 4",
        descripcion:["2 Chrispeta mediana","2 Gaseosa 2 ONZ","2 Chocolatinas"],
        precio: 39.500,
        categoria: "combo"
      },
      {
        img:"https://i.ibb.co/sKByS2s/combo5.png",
        nombre:"Combo 5",
        descripcion:["1 Chrispeta Familiar","2 Gaseosa 2 ONZ","2 Chocolatinas"],
        precio: 34.000,
        categoria: "combo"
      },
      {
        img:"https://i.ibb.co/8jWvPyh/menu1.png",
        nombre:"Menu 1",
        descripcion:["1 Chrispeta Mediana","1 Gaseosa 16 ONZ","1 Perro Caliente"],
        precio: 28.000,
        categoria: "menu"
      },
      {
        img:"https://i.ibb.co/dKP0SZx/menu2.png",
        nombre:"Menu 2",
        descripcion:["1 Chrispeta Mediana","2 Gaseosa 22 ONZ","2 Perro Caliente"],
        precio: 54.000,
        categoria: "menu"
      }
    ];

    return of(menu); // Devuelve un observable del menú
  }
  getMenuByCategoria(categoria: string): Observable<Menu[]> {
    return this.getCafeteria().pipe(
      map(menu => menu.filter(item => item.categoria === categoria))
    );
  }
}
