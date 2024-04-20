import { Component } from '@angular/core';
import { TextoService } from '../../services/texto.service';

@Component({
  selector: 'app-conocenos',
  standalone: true,
  imports: [],
  templateUrl: './conocenos.component.html',
  styleUrl: './conocenos.component.css'
})
export class ConocenosComponent {

  text: any = []
  constructor(private textoService:TextoService) { }
  ngOnInit(){
    this.textoService.getConocenos().subscribe(
      res => {
        this.text = res.conocenos
      }
    )
  }
}
