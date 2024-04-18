import { Component } from '@angular/core';
import { CarruselComponent } from '../carrusel/carrusel.component';

@Component({
  selector: 'app-cartelera',
  standalone: true,
  imports: [CarruselComponent],
  templateUrl: './cartelera.component.html',
  styleUrl: './cartelera.component.css'
})
export class CarteleraComponent {

}