import {Component, inject, TrackByFunction} from '@angular/core';
import {debounceTime, distinctUntilChanged, filter, map, Observable, startWith, withLatestFrom} from "rxjs";
import {MovieMinimalDTO} from "../../core/models/movies.model";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute, RouterLink, RouterOutlet} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {DurationMinutesInHoursPipe} from "../../core/pipes/duration-minutes-in-hours.pipe";
import {RoutesMap} from "../../core/utils/route.utilities";

type FormFilters = FormGroup<{
  title: FormControl<string | null>;
  releaseYear: FormControl<string | null>;
}>;

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [NgForOf, AsyncPipe, NgIf, RouterLink, RouterOutlet, ReactiveFormsModule, DurationMinutesInHoursPipe],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  protected route: ActivatedRoute = inject(ActivatedRoute)
  protected fb: FormBuilder = inject(FormBuilder)
  private movieList$: Observable<MovieMinimalDTO[]> = this.route.data.pipe(map(({movieList}) => movieList));
  protected movieListFiltered$: Observable<MovieMinimalDTO[]> = this.route.data.pipe(map(({movieList}) => movieList));
  protected trackByMovieId: TrackByFunction<MovieMinimalDTO> = (index, movie) => movie.id;

  protected formFilters: FormFilters;
  protected readonly RoutesMap = RoutesMap;

  constructor() {
    //initialize form movie filters
    this.formFilters = this.fb.group({
      title: this.fb.control(''),
      releaseYear: this.fb.control('')
    })
    //manage the filtering of the movie list
    this.movieListFiltered$ = this.getMovieListFiltered$()
  }

  /**
   * Retrieves a filtered list of movies based on form filter criteria.
   * @returns An Observable emitting an array of MovieMinimalDTO objects representing the filtered movie list.
   */
  private getMovieListFiltered$(): Observable<MovieMinimalDTO[]> {
    return this.formFilters.valueChanges.pipe(distinctUntilChanged(),debounceTime(400), startWith({
      title: '',
      releaseYear: ''
    }), withLatestFrom(this.movieList$), map(([{
      title,
      releaseYear
    }, movieList]) => {
      return movieList.filter(film =>
        (title ? film.title.toLowerCase().includes(title.toLowerCase()) : true) &&
        (releaseYear ? film.release_date.includes(releaseYear) : true)
      );
    }));
  }
}
