import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import 'boxicons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  year: any
  constructor() { }
  ngOnInit() {
    this.year = new Date().getFullYear();
  }
}
