import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Cartelera, Poster, Proximamente } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class EstrenosService {

  constructor() { }

  getEstrenos(): Observable<Cartelera[]> {
    const cartelera: Cartelera[] = [
      {
        "id": "1",
        "nombre": "Duna",
        "poster": "https://m.media-amazon.com/images/I/61Mde7eiFbL._AC_UF894,1000_QL80_.jpg",
        "nombre_original": "Dune",
        "sinopsis": "Arrakis, también denominado 'Dune', se ha convertido en el planeta más importante del universo. A su alrededor comienza una gigantesca lucha por el poder que culmina en una guerra interestelar.",
        "director": "Denis Villeneuve",
        "reparto": ["Timothee Chalamet", "Zendaya", "Rebecca Ferguson"],
        "duracion": 155,
        "clasificacion": "PG-13",
        "url_trailer": "https://www.youtube.com/embed/TTgk_iT8Uts"
      },
      {
        "id": "2",
        "nombre": "The Batman",
        "poster": "https://static.posters.cz/image/1300/posters/the-batman-2022-i122127.jpg",
        "nombre_original": "The Batman",
        "sinopsis": `En su segundo año luchando contra el crimen, Batman explora la corrupción existente en la ciudad de Gotham y el vínculo de esta con su propia familia. Además, entrará en conflicto con un asesino en serie conocido como "el Acertijo"`,
        "director": "Matt Reeves",
        "reparto": ["Robert Pattinson", "Zoe Kravitz", "Paul Dano"],
        "duracion": 176,
        "clasificacion": "PG-13",
        "url_trailer": "https://www.youtube.com/embed/fWQrd6cwJ0A?si=a3VHQCVUFejxF2bU"
      },
      {
        "id": "3",
        "nombre": "Avatar: El sentido del agua",
        "poster": "https://m.media-amazon.com/images/I/71Lvqoov42L._AC_UF894,1000_QL80_.jpg",
        "nombre_original": "Avatar: The Way of Water",
        "sinopsis": "Jake Sully y Ney'tiri han formado una familia y hacen todo lo posible por permanecer juntos. Sin embargo, deben abandonar su hogar y explorar las regiones de Pandora cuando una antigua amenaza reaparece.",
        "director": "James Cameron",
        "reparto": ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
        "duracion": 190,
        "clasificacion": "+12",
        "url_trailer": "https://www.youtube.com/embed/kPMi_VxqcUc?si=JpTQl_QnriExcIc5"
      },
      {
        "id": "4",
        "nombre": "Mision: Imposible 8",
        "poster": "https://m.media-amazon.com/images/I/71mSHZp4xML.jpg",
        "nombre_original": "Mission: Impossible 8",
        "sinopsis": "Las nuevas aventuras del agente del FMI y líder de un equipo de operativos, Ethan Hunt.",
        "director": "Christopher McQuarrie",
        "reparto": ["Tom Cruise", "Rebecca Ferguson", "Vanessa Kirby"],
        "duracion": 163,
        "clasificacion": "PG-13",
        "url_trailer": "https://www.youtube.com/embed/XoDmKCZBeeI?si=J_1ECFQGeRJs07vB"
      },
      {
        "id": "5",
        "nombre": "Thor: Amor y trueno",
        "poster": "https://m.media-amazon.com/images/I/71Qbo0tyNBL._AC_UF894,1000_QL80_.jpg",
        "nombre_original": "Thor: Love and Thunder",
        "sinopsis": "Thor está buscando la paz interior, pero la irrupción de Gorr, el asesino de dioses, le obliga a volver al combate. Thor recluta a la Reina Valkiria, Korg y su exnovia, Jane Foster, para que lo ayuden a evitar la extinción de los dioses.",
        "director": "Taika Waititi",
        "reparto": ["Chris Hemsworth", "Natalie Portman", "Tessa Thompson"],
        "duracion": 159,
        "clasificacion": "PG-13",
        "url_trailer": "https://www.youtube.com/embed/vKKu-Wt7O2Q?si=PzrJHLv2TpzAXHPq"
      }
    ];

    return of(cartelera);
  }
  getEstrenoOne(id: string): Observable<Cartelera | undefined> {
    return this.getEstrenos().pipe(
      map(estrenos => estrenos.find(estreno => estreno.id === id))
    );
  }
  getProximos(): Observable<Proximamente[]> {
    const proximo_estreno: Proximamente[] = [
      {
        "id": "6",
        "nombre": "Spider-Man: Sin Camino a Casa",
        "poster": "https://m.media-amazon.com/images/I/81RbGwa-dGL._AC_UF894,1000_QL80_.jpg",
        "fecha_estreno": "2024-12-17",
        "nombre_original": "Spider-Man: No Way Home",
        "sinopsis": "Peter Parker intenta resolver su vida mientras lidia con las consecuencias de revelar su identidad como Spider-Man.",
        "director": "Jon Watts",
        "reparto": ["Tom Holland", "Zendaya", "Jacob Batalon"],
        "duracion": 148,
        "clasificacion": "PG-13",
        "url_trailer": "https://www.youtube.com/embed/r6t0czGbuGI?si=7lJRc1_2DDS6cnj0"
      },
      {
        "id": "7",
        "nombre": "Jurassic World: Dominio",
        "poster": "https://m.media-amazon.com/images/I/91LBjq8Y7QL._AC_UF894,1000_QL80_.jpg",
        "fecha_estreno": "2024-07-23",
        "nombre_original": "Jurassic World: Dominion",
        "sinopsis": "Continuación de la saga de Jurassic World, donde los dinosaurios ahora viven en el continente americano.",
        "director": "Colin Trevorrow",
        "reparto": ["Chris Pratt", "Bryce Dallas Howard", "Sam Neill"],
        "duracion": 146,
        "clasificacion": "PG-13",
        "url_trailer": "https://www.youtube.com/embed/9m9yRauMJIQ?si=QeqYH89X5boTMimV"
      },
      {
        "id": "8",
        "nombre": "Top Gun: Maverick",
        "poster": "https://m.media-amazon.com/images/I/71BokibfVUL._AC_UF894,1000_QL80_.jpg",
        "fecha_estreno": "2024-08-02",
        "nombre_original": "Top Gun: Maverick",
        "sinopsis": "Pete 'Maverick' Mitchell sigue siendo el mejor piloto de combate, pero se encuentra en el mundo de los drones y combate de quinta generación, mientras enfrenta los fantasmas de su pasado.",
        "director": "Joseph Kosinski",
        "reparto": ["Tom Cruise", "Miles Teller", "Jennifer Connelly"],
        "duracion": 162,
        "clasificacion": "PG-13",
        "url_trailer": "https://www.youtube.com/embed/1w2P46uub7M?si=kTZXOEr-U-x7U4xD"
      },
      {
        "id": "9",
        "nombre": "Pantera Negra: Wakanda por siempre",
        "poster": "https://m.media-amazon.com/images/I/A17r4dU-5aL._AC_UF1000,1000_QL80_.jpg",
        "fecha_estreno": "2024-10-11",
        "nombre_original": "Black Panther: Wakanda Forever",
        "sinopsis": "Secuela de 'Black Panther', que sigue las aventuras del rey T'Challa, también conocido como Black Panther, protector de la ficticia nación africana de Wakanda.",
        "director": "Ryan Coogler",
        "reparto": ["Letitia Wright", "Danai Gurira", "Daniel Kaluuya"],
        "duracion": 144,
        "clasificacion": "PG-13",
        "url_trailer": "https://www.youtube.com/embed/hpT-11DMqVs?si=1aIlSup1ZCwDVugO"
      }
    ];

    return of(proximo_estreno);
  }
  getProximoOne(id: string): Observable<Proximamente | undefined> {
    return this.getProximos().pipe(
      map(proximos => proximos.find(proximo => proximo.id === id))
    );
  }
  getPoster(): Observable<Poster[]> {
    const poster: Poster[] = [
      {
        img: "https://i.blogs.es/2af678/dune-cartel/1366_521.jpeg",
        nombre: "Duna",
      },
      {
        img: "https://m.media-amazon.com/images/I/71lvUYzEe9L.jpg",
        nombre: "Top Gun: Maverick",
      },
      {
        img: "https://img.aullidos.com/imagenes/noticias/tw-37275.jpg",
        nombre: "Thor: Amor y trueno",
      },
      {
        img: "https://static.posters.cz/image/hp/66923.jpg",
        nombre: "The Batman",
      }

    ];

    return of(poster);
  }
}
