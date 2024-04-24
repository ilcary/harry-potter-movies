import {Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {MovieListComponent} from "./components/movie-list/movie-list.component";

export const routes: Routes = [
    {
      path: '', pathMatch: 'full', redirectTo: 'home'
    },
    {
      path: 'home', component: HomeComponent,
    },
    {
      path: 'movie-list', component: MovieListComponent,
      children: [
        {
          path: ':movieId',
          loadComponent: () => import('./components/movie-detail/movie-detail.component').then((c) => c.MovieDetailComponent)
        }
      ]
    }
  ]
;
