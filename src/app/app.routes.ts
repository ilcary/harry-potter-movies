import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {MovieListComponent} from "./components/movie-list/movie-list.component";
import {RoutesMap} from "./core/utils/route.utilities";



export const routes: Routes = [
    {
      path: '', pathMatch: 'full', redirectTo: 'home'
    },
    {
      path: RoutesMap.HOME.path, component: HomeComponent,
    },
    {
      path: RoutesMap.MOVIE_LIST.path, component: MovieListComponent,
      children: [
        {
          path: ':movieId',
          loadComponent: () => import('./components/movie-detail/movie-detail.component').then((c) => c.MovieDetailComponent)
        }
      ]
    }
  ]
;
