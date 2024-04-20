import { Component } from '@angular/core';
import { TextoService } from '../../services/texto.service';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {

  text: any = []
  constructor(private textoService:TextoService) { }
  ngOnInit(){
    this.textoService.getServicios().subscribe(
      res => {
        this.text = res.servicios
      }
    )
  }
}
