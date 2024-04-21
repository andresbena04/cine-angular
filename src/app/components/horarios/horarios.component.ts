import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-horarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './horarios.component.html',
  styleUrl: './horarios.component.css'
})
export class HorariosComponent {

  fechaActual: Date;
  fechaFinal: Date;
  fechas: Date[];

  constructor() {
    // Obtener la fecha actual
    this.fechaActual = new Date();

    // Establecer la fecha final 6 días después de la fecha actual
    this.fechaFinal = new Date();
    this.fechaFinal.setDate(this.fechaFinal.getDate() + 5);

    // Generar un arreglo de fechas desde fechaActual hasta fechaFinal
    this.fechas = [];
    let fechaIteracion = new Date(this.fechaActual);
    while (fechaIteracion <= this.fechaFinal) {
      this.fechas.push(new Date(fechaIteracion));
      fechaIteracion.setDate(fechaIteracion.getDate() + 1);
    }
  }
}
