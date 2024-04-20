import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private router: Router) { }


  resetScroll(): void {
    window.scrollTo(0, 0);
  }

  scrollToTopOnRouterNavigation(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.resetScroll();
      }
    });
  }
}