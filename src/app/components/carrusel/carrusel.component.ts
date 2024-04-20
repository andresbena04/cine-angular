import { Component } from '@angular/core';
import { EstrenosService } from '../../services/estrenos.service';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent {

  posters: any = []
  constructor(private estrenoSercive:EstrenosService){}

  ngOnInit(){
    this.estrenoSercive.getPoster().subscribe(
      res=>{
        this.posters = res
      }, err=>{
        console.log(err)
      }
    )
  }
}
