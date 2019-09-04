import { Component, OnInit } from '@angular/core';
import { RapidService } from '../rapid.service';

@Component({
  selector: 'app-favourites-list',
  templateUrl: './favourites-list.component.html',
  styleUrls: ['./favourites-list.component.css']
})
export class FavouritesListComponent implements OnInit {
  public obj;
  constructor(private _rapidService : RapidService) { }

  remove_fav(val){
    this._rapidService.remove(val).subscribe();
    
    alert("Song removed");
    window.location.reload();
  }

  logComment(value){
    this.obj.comment = value;
    window.location.reload();
  }

  

  ngOnInit() {
    this._rapidService.get_fav().subscribe(data => {console.log(data);this.obj =data});
    
  }

}
