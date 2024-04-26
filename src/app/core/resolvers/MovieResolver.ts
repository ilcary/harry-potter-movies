import {ActivatedRouteSnapshot, ResolveFn, Router, RouterStateSnapshot} from '@angular/router';
import {inject} from '@angular/core';
import {Observable, of, tap} from 'rxjs';
import {MovieDTO} from "../models/movies.model";
import {RoutesMap} from "../utils/route.utilities";
import {MoviesApiService} from "../services/movies-api.service";

export const MovieResolver: ResolveFn<MovieDTO | null> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  moviesApiService: MoviesApiService = inject(MoviesApiService),
  router: Router = inject(Router)
): Observable<MovieDTO | null> => {
  const paramId = route.paramMap.get(RoutesMap.MOVIE_LIST_DETAIL.name)
  if (!paramId) {
    return of(null)
  }
  return moviesApiService.getMovieDetail(paramId).pipe(tap((movie) => !movie && router.navigate([RoutesMap.MOVIE_LIST.path])))
}
