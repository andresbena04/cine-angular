import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EstrenosService } from '../../services/estrenos.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HorariosComponent } from '../horarios/horarios.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-pelicula',
  standalone: true,
  imports: [RouterLink, HorariosComponent, DatePipe],
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css'
})
export class PeliculaComponent {

  source: string = ""
  id: string = ""
  source_name: string = ""
  dataMovie: any = []
  videoUrl: SafeResourceUrl = "";
  constructor(private route: ActivatedRoute, private estrenosSercive: EstrenosService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.source = params['source']
      this.id = params['id']
      if (this.source === 'cartelera') {
        this.estrenosSercive.getEstrenoOne(this.id).subscribe(
          res => {
            this.dataMovie = res
            this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.dataMovie.url_trailer)
            this.source_name = "Cartelera"
          }, err => {
            console.log(err)
          }
        )
      } else if (this.source === 'proximamente') {
        this.estrenosSercive.getProximoOne(this.id).subscribe(
          res => {
            this.dataMovie = res
            this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.dataMovie.url_trailer)
            this.source_name = "Próximamente"
          }, err => {
            console.log(err)
          }
        )
      } else {
        console.log('Origen desconocido');
      }
    });
  }
}
