import { Component } from '@angular/core';
import { EstrenosService } from '../../services/estrenos.service';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-proximamente',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './proximamente.component.html',
  styleUrl: './proximamente.component.css'
})
export class ProximamenteComponent {

  proximos: any = []
  constructor(private estrenosService: EstrenosService) { }

  ngOnInit() {
    this.estrenosService.getProximos().subscribe(
      res => {
        this.proximos = res
      }, err => {
        console.log(err)
      }
    )
  }
}
