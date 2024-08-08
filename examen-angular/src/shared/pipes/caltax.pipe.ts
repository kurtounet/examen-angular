import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caltax',
  standalone: true
})
export class CaltaxPipe implements PipeTransform {

  transform(value: number, tva: number): number {
    return value + (value*tva);
  }

}
