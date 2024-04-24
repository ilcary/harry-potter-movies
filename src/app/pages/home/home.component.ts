import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router} from "@angular/router";
import {RoutesMap} from "../../core/utils/route.utilities";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private router: Router = inject(Router)

  /**
   * Method to navigate to the movie list
   * */
 protected navigateToMovieList() {
    this.router.navigate([RoutesMap.MOVIE_LIST.path]);
  }
}
