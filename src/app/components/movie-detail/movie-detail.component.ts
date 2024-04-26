import {Component, inject} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {map, Observable} from "rxjs";
import {AsyncPipe, CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {MovieDTO} from "../../core/models/movies.model";
import {BoxOfficePipe} from "../../core/pipes/box-office.pipe";
import {DurationMinutesInHoursPipe} from "../../core/pipes/duration-minutes-in-hours.pipe";
import {RoutesMap} from "../../core/utils/route.utilities";

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    CurrencyPipe,
    BoxOfficePipe,
    RouterLink,
    DurationMinutesInHoursPipe,
    NgForOf,
  ],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {
  private route: ActivatedRoute = inject(ActivatedRoute);
  protected movieDetail$:Observable<MovieDTO | null> = this.route.data.pipe(map(({movie}) => movie));
  protected readonly RoutesMap = RoutesMap;
}
