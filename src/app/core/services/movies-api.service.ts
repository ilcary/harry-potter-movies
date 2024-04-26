import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";
import {catchError, Observable, of} from "rxjs";
import {MovieDTO, MovieMinimalDTO} from "../models/movies.model";

@Injectable({providedIn:'root'})
export class MoviesApiService extends ApiService {
  private readonly MOVIE_API_PATH: string = 'movies'


  getMovieList(): Observable<MovieMinimalDTO[]> {
    return this.get(
      `${this.MOVIE_API_PATH}`
    ).pipe(catchError((err) => {
      console.error('There was an error getting movies')
      return of(err);
    }));
  }

  getMovieDetail(movieId: string): Observable<MovieDTO> {
    return this.get(
      `${this.MOVIE_API_PATH}/${movieId}`
    ).pipe(catchError((err) => {
      console.error(`There was an error getting the movie with id: ${movieId}`)
      return of(err);
    }));;
  }

}
