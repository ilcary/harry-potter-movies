import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class MoviesApiService {
  private readonly MOVIE_API_PATH: string = '/movies'

  constructor(protected httpClient: HttpClient) {
  }
}
