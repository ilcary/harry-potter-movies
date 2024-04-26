import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {MovieListComponent} from "./pages/movie-list/movie-list.component";
import {RoutesMap} from "./core/utils/route.utilities";
import {MovieResolver} from "./core/resolvers/MovieResolver";
import {MovieListResolver} from "./core/resolvers/MovieListResolver";


export const routes: Routes = [
    {
      path: '', pathMatch: 'full', redirectTo: RoutesMap.HOME.path
    },
    {
      path: RoutesMap.HOME.path, component: HomeComponent,
    },
    {
      path: RoutesMap.MOVIE_LIST.path, component: MovieListComponent,
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
