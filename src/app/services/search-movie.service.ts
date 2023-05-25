import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../common/movie';

@Injectable({
  providedIn: 'root'
})
export class SearchMovieService {

  constructor(private http: HttpClient){ }

  private baseUrl = `${environment.apiAllMovies}/v1/search/movie`;
  
  public searchMovieByTitle(movieTitle: String): Observable<Movie> {
    return this.http.get<Movie>(this.baseUrl + "?movieName=" + movieTitle );
  }

}
