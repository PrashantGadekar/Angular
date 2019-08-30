import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { SongComponent } from './song/song.component';
import { SearchifyComponent } from './searchify/searchify.component';
import { ArtinfoComponent } from './searchify/artinfo/artinfo.component';
import { ArtDetailsComponent } from './art-details/art-details.component';


const routes: Routes = [
    { path : 'homepage', component:HomePageComponent},
    {path : 'topsong', component:SongComponent}, 
    {path : 'Search', component:SearchifyComponent},
    {path : 'Info', component :ArtinfoComponent}, 
    {path : 'Info/:id', component:ArtDetailsComponent}
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
