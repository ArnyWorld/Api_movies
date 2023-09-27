import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit{
  private _movieService = inject(MovieService);
  private route = inject(ActivatedRoute);
  @ViewChild('imageData') myImage?: ElementRef;
  movies:any = [];
  stateData:boolean = true;
  movieTitle:string="";

  ngOnInit(): void {
      this.route.queryParams.subscribe(
        qparams =>{
          let q = qparams['q']
          if(q){
            this.movieTitle = `Busqueda: ${q}` ;
            this.getMoviesSearch(q);
          }else{
            this.movieTitle="Los más populares"
            this.getMovies();
          }
        }
        )
        this.onImageData();
  }
  constructor(){
    this.stateData = true;

  }
  getMovies(){
    this._movieService.getListMovies().subscribe(data=>{
      this.movies = data;
      this.stateData = false;
    })
  }
  getMoviesSearch(title:string){
        this._movieService.getSearchMovies(title).subscribe(data=>{
          this.movies = data;
          this.stateData = false;
        }
    )
  }
  onImageData(){
    const imageElement: HTMLImageElement = this.myImage?.nativeElement;
    if (imageElement.complete) {
      // La imagen ya se ha cargado.
      this.stateData = false;
    } else {
      // La imagen todavía se está cargando.

    }
  }
}

