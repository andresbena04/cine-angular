import { Component } from '@angular/core';
import { CarruselComponent } from '../carrusel/carrusel.component';
import { EstrenosService } from '../../services/estrenos.service';

@Component({
  selector: 'app-cartelera',
  standalone: true,
  imports: [CarruselComponent],
  templateUrl: './cartelera.component.html',
  styleUrl: './cartelera.component.css'
})
export class CarteleraComponent {

  estrenos: any = []
  constructor(private estrenosService: EstrenosService) { }

  ngOnInit() {
    this.estrenosService.getEstrenos().subscribe(
      res => {
        this.estrenos = res
      }, err => {
        console.log(err)
      }
    )
  }
}
