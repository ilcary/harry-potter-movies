import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationMinutesInHours',
  standalone: true
})
export class DurationMinutesInHoursPipe implements PipeTransform {

  transform(minutes: string): string {
    const minutesNum = Number(minutes)
    const hours = Math.floor(minutesNum / 60);
    const remainingMinutes = minutesNum % 60;
    return `${hours}h ${remainingMinutes}min`;
  }
}
