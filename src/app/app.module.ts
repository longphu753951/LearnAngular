import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { StoreModule } from '@ngrx/store';
import {FormsModule} from "@angular/forms";
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MessageComponent } from './message/message.component';
import { MovieService } from '@core/services/movie.service';
import { MessageService } from '@core/services/message.service';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieDetailComponent,
    MessageComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    FormsModule
  ],
  providers: [
    MovieService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
