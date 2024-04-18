import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberFormat',
  standalone: true
})
export class NumberPipe implements PipeTransform {

  transform(value: number): string {
  
    if (isNaN(value)) {
      return '';
    }

    const parts = value.toFixed(3).split('.');
    
    let decimalPart = parts[1];
    if (decimalPart.length < 3) {
      decimalPart = decimalPart.padEnd(3, '0');
    }
    
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return '$ ' + integerPart + '.' + decimalPart;
  }

}
