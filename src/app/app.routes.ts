import {Routes} from '@angular/router';
import {RoutesMap} from "./core/utils/route.utilities";
import {MovieResolver} from "./core/resolvers/MovieResolver";
import {MovieListResolver} from "./core/resolvers/MovieListResolver";


export const routes: Routes = [
    {
      path: '', pathMatch: 'full', redirectTo: RoutesMap.HOME.path
    },
    {
      path: RoutesMap.HOME.path,
      loadComponent: () => import('./pages/home/home.component').then((c) => c.HomeComponent),
    },
    {
      path: RoutesMap.MOVIE_LIST.path,
      loadComponent: () => import('./pages/movie-list/movie-list.component').then((c) => c.MovieListComponent),
      resolve: {
        movieList: MovieListResolver
      },
      children: [
        {
          path: RoutesMap.MOVIE_LIST_DETAIL.path,
          loadComponent: () => import('./components/movie-detail/movie-detail.component').then((c) => c.MovieDetailComponent),
          resolve: {
            movie: MovieResolver
          }
        }
      ]
    },
    {
      path: "**",
      redirectTo: RoutesMap.HOME.path
    }
  ]
;
