import { Component } from '@angular/core';
import { TextoService } from '../../services/texto.service';

@Component({
  selector: 'app-publicidad',
  standalone: true,
  imports: [],
  templateUrl: './publicidad.component.html',
  styleUrl: './publicidad.component.css'
})
export class PublicidadComponent {

  text: any = []
  constructor(private textoService:TextoService) { }
  ngOnInit(){
    this.textoService.getPublicidad().subscribe(
      res => {
        this.text = res.publicidad
      }
    )
  }
  
}
