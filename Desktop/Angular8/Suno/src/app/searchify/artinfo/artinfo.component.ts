import { Component, OnInit, Input } from '@angular/core';
import { RapidService } from 'src/app/rapid.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-artinfo',
  templateUrl: './artinfo.component.html',
  styleUrls: ['./artinfo.component.css']
})
export class ArtinfoComponent implements OnInit {
  
  public inf =[];
  public artist_name;
  public album_name;
  constructor(private _rapidService : RapidService, private route : ActivatedRoute ) { }

  getBoth(value1,value2){
    console.log(value1,value2,"Inside the getThem function()");
  //  this._rapidService.getArtInfo(this.parentData,this.albumName).subscribe((data)=> {console.log(data); this.inf=data;})
  }

  
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    let ids = this.route.snapshot.paramMap.get('ids');
    console.log(id);
    console.log(ids);
    this.artist_name = id;
    this.album_name = ids;
    this._rapidService.getTrackInfo(id,ids).subscribe((data)=> {console.log(data); this.inf=data;})
  }

}
