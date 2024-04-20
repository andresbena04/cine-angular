import { Component, Pipe } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TarifasService } from '../../services/tarifas.service';
import { NumberPipe } from '../../pipes/number.pipe';

@Component({
  selector: 'app-promociones',
  standalone: true,
  imports: [RouterLink, NumberPipe],
  templateUrl: './promociones.component.html',
  styleUrl: './promociones.component.css'
})
export class PromocionesComponent {

  tarifas2D: any = []
  tarifas3D: any = []
  constructor(private tarifasService:TarifasService){}

  ngOnInit(){
    this.tarifasService.getTarifa2D().subscribe(
      res=>{
        this.tarifas2D = res
      },
      err =>{
        console.log(err)
      }
    )
    this.tarifasService.getTarifa3D().subscribe(
      res=>{
        this.tarifas3D = res
      },
      err =>{
        console.log(err)
      }
    )
  }
}
