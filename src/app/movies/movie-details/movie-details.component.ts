import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Result } from 'src/app/models/Movies';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{
  private _movieService = inject(MovieService);
  private router = inject(ActivatedRoute);
  movie:any = "";
  stateData:boolean = true;
  ngOnInit(): void {
    this.loadMovie();
  }

  loadMovie(){
    this.router.params.subscribe(data=>{
      let id= data['id']
      this._movieService.getMovieDetail(id)
      .subscribe(data=>{
        this.movie = data;
        this.stateData = false;
      })
    })
  }
  goBack(){
    window.history.back();
  }


}
