import { Component, OnInit } from '@angular/core';
import { MovieService } from '@core/services/movie.service';
import { Movie } from '@core/models/movie';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  topMovie: Movie[] = [];
  testHtml: string = '<div>hello<h1>goodbye</h1></div>'

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.getTopMovies();
  }

  private getTopMovies(): void{
    this.movieService.getMovie().subscribe(data => this.topMovie =  data.slice(0,4));
  }

}
