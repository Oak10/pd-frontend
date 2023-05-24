import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../common/movie';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class MovieService {

  private baseUrl = `${environment.apiUrl}/v1/movie`;


  constructor(private http: HttpClient){ }

  public getMoviesList(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl);
  }

  public createMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.baseUrl, movie);
  }

  public deleteMovie(movieId: number): Observable<any> {  
    return this.http.delete<any>(this.baseUrl + "/" + movieId);
  }

  public updateMovie(movie:Movie, movieId: number){
    return this.http.put<Movie>(this.baseUrl + "/" + movieId, movie);
  }

}
