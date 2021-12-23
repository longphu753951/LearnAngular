import { Component, Input, OnInit } from '@angular/core';
import  {Movie} from '@core/models/movie'
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '@core/services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  test: string = "test";
  @Input() movie?: Movie;
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.getMovieFromRoute();
  }

  private getMovieFromRoute(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.movieService.getMovieById(id).subscribe(data => this.movie = data);
    return;
  }

  public goBack():void {
    this.location.back();
  }
}
