import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-tarjeta-cliente',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './tarjeta_cliente.component.html',
  styleUrl: './tarjeta_cliente.component.css'
})
export class TarjetaClienteComponent {

}
