import { Component, OnInit } from '@angular/core';
import { RapidService } from 'src/app/rapid.service';


@Component({
  selector: 'app-artinfo',
  templateUrl: './artinfo.component.html',
  styleUrls: ['./artinfo.component.css']
})
export class ArtinfoComponent implements OnInit {
  
  public inf =[];
  constructor(private _rapidService : RapidService ) { }

  getBoth(value1,value2){
    console.log(value1,value2,"Inside the getThem function()");
    this._rapidService.getArtInfo(value1,value2).subscribe((data)=> {console.log(data); this.inf=data;})
  }

  ngOnInit() {

  }

}
