import { Component, OnInit } from '@angular/core';
import { RapidService } from '../rapid.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  public song1 =[];
  constructor(private _rapidService : RapidService,private router : Router) { }

  public str;
  getThem(value){
    this.str =value;
    console.log(this.str);
    this._rapidService.getSearch(value)
              .subscribe(data => {console.log(data); this.song1=data})
  }

  ngOnInit() {
     this._rapidService.getTopSongs()
                       .subscribe(data => {console.log(data); this.song1 = data;});
  }

  onSelect(artistname, trackname){
    this.router.navigate(['/Info', artistname,trackname])
  }

}
