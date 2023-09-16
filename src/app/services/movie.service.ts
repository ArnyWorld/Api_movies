import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Movie, Result } from '../models/Movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private http = inject(HttpClient);
  baseUrl = environment.baseUrl;
  constructor() { }

  getListMovies(){
    return this.http.get<Movie>(`${this.baseUrl}/movie/popular?api_key=${environment.API_KEY}&language=en-US&page=1`)
    .pipe(
      map(
        data=>data.results
      )
    );
  }
  getSearchMovies(titleMovie:string){
    return this.http.get<Movie>(`${this.baseUrl}/search/movie?api_key=${environment.API_KEY}&query="${titleMovie}`)
    .pipe(
      map(
        data=>data.results
      )
    );
  }
  getMovieDetail(id:number){
    return this.http.get<Result>(`${this.baseUrl}/movie/${id}?api_key=${environment.API_KEY}`)
  }
}
