import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from '@angular/router';
import {inject} from '@angular/core';
import {Observable} from 'rxjs';
import {MovieMinimalDTO} from "../models/movies.model";
import {MoviesApiService} from "../services/movies-api.service";

export const MovieListResolver: ResolveFn<MovieMinimalDTO[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  moviesApiService: MoviesApiService = inject(MoviesApiService)
): Observable<MovieMinimalDTO[]> => moviesApiService.getMovieList()

