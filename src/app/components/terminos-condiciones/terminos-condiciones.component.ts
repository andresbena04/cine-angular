import { Component } from '@angular/core';
import { TextoService } from '../../services/texto.service';

@Component({
  selector: 'app-terminos-condiciones',
  standalone: true,
  imports: [],
  templateUrl: './terminos-condiciones.component.html',
  styleUrl: './terminos-condiciones.component.css'
})
export class TerminosCondicionesComponent {

  text: any = []
  constructor(private textoService:TextoService) { }
  ngOnInit(){
    this.textoService.getTerminosCondiciones().subscribe(
      res => {
        this.text = res.terminos_y_condiciones
      }
    )
  }
}
