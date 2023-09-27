import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListSkeletonComponent } from './shared/list-movie/skeleton-movie.component';
import { LazyImageComponent } from './shared/lazy-image/lazy-image.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieDetailsComponent,
    MovieListComponent,
    ListSkeletonComponent,
    LazyImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
