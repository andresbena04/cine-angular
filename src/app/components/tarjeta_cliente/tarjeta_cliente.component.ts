import { Component } from '@angular/core';
import { TextoService } from '../../services/texto.service';

@Component({
  selector: 'app-tarjeta-cliente',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta_cliente.component.html',
  styleUrl: './tarjeta_cliente.component.css'
})
export class TarjetaClienteComponent {

  text: any = []
  constructor(private textoService:TextoService) { }
  ngOnInit(){
    this.textoService.getTarjetaCliente().subscribe(
      res => {
        this.text = res.tarjeta_cliente
      }
    )
  }
}
