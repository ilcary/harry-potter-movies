import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'boxOffice',
  standalone: true
})
export class BoxOfficePipe implements PipeTransform {

  transform(rawNum: string,): unknown {
    const num = Number(rawNum)
    if (rawNum.length > 1 && rawNum[1] === '.') {
      // If the second character is a dot, treat as "billion"
      return `$${num} billion`;
    } else {
      // Convert value to "million"
      return `$${num} million`;
    }
  }

}
