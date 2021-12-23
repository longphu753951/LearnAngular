import { Component, OnInit } from '@angular/core';
import {Movie} from "../core/models/movie";
import { MovieService } from '@core/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];
  selectedMovie?: Movie;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
     this.getMoviesOnServices();
  }

  getMoviesOnServices(): void {
    this.movieService.getMovie().subscribe(result =>{
      this.movies = result;
    });
  }


}
