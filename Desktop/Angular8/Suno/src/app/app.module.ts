import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SongComponent } from './song/song.component';
import { RapidService } from './rapid.service';
import {HttpClientModule} from '@angular/common/http';
import { SearchifyComponent } from './searchify/searchify.component';
import { ArtinfoComponent } from './searchify/artinfo/artinfo.component';
import { ArtDetailsComponent } from './art-details/art-details.component';
import { FavouritesListComponent } from './favourites-list/favourites-list.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SongComponent,
    SearchifyComponent,
    ArtinfoComponent,
    ArtDetailsComponent,
    FavouritesListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [RapidService],
  bootstrap: [AppComponent]
})
export class AppModule { }
