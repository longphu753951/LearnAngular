import { Injectable } from '@angular/core';
import { Movie } from '@core/models/movie';
import { Observable, of } from 'rxjs';
import { MessageService } from '@core/services/message.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movieList: Movie[] = [
    {
      id: 1,
      name: 'Star wars 1',
      releaseYear: '24/4/2014',
    },
    {
      id: 2,
      name: 'Star wars 3',
      releaseYear: '24/4/2014',
    },
    {
      id: 3,
      name: 'Star wars 4',
      releaseYear: '24/4/2014',
    },
    {
      id: 4,
      name: 'Star wars 5',
      releaseYear: '24/4/2014',
    },
    {
      id: 5,
      name: 'Star wars 6',
      releaseYear: '24/4/2014',
    },
    {
      id: 6,
      name: 'Star wars 7',
      releaseYear: '24/4/2014',
    }
  ]
  getMovie(): Observable<Movie[]> {
    this.messageService.add(`Get movie list: ${new Date().toLocaleString()}`);
    return of(this.movieList);
  }

  getMovieById(id: number): Observable<Movie|undefined> {
    return of(this.movieList.find(movie => movie.id === id));
  }

  constructor(public messageService: MessageService) { }


}
