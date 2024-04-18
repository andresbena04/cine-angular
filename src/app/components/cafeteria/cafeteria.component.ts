import { Component } from '@angular/core';
import { CafeteriaService } from '../../services/cafeteria.service';
import { NumberPipe } from '../../pipes/number.pipe';

@Component({
  selector: 'app-cafeteria',
  standalone: true,
  imports: [NumberPipe],
  templateUrl: './cafeteria.component.html',
  styleUrl: './cafeteria.component.css'
})
export class CafeteriaComponent {

  cafeteria: any = []
  constructor(private cafeteriaService:CafeteriaService){}

  ngOnInit(){
    this.cafeteriaService.getCafeteria().subscribe(res => {
      this.cafeteria = res
    }, err => {
      console.log(err)
    })
  }
}
