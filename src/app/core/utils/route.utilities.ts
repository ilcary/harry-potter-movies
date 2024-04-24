export interface RoutesMap {
  name: string;
  path: string;
}

export class RoutesMap {
  public static HOME: RoutesMap = {
    name: 'home',
    path: 'home',
  };
  public static MOVIE_LIST: RoutesMap = {
    name: 'movie-list',
    path: 'movie-list',
  };
  }
