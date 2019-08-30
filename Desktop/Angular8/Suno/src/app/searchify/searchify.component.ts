import { Component, OnInit } from '@angular/core';
import { RapidService } from '../rapid.service';

@Component({
  selector: 'app-searchify',
  templateUrl: './searchify.component.html',
  styleUrls: ['./searchify.component.css']
})
export class SearchifyComponent implements OnInit {

 
  constructor(private _rapidService : RapidService) { }

 
  public ser=[];
  public inf=[];
  public str;
  
  getThem(value){
    this.str = value;
    console.log(value,"Inside the getThem function()");
    this._rapidService.getSearch(value).subscribe((data) => {console.log(data); this.ser=data});
  }

  getBoth(value1,value2){
    console.log(value1,value2,"Inside the getThem function()");
    this._rapidService.getArtInfo(value1,value2).subscribe((data)=> {console.log(data); this.inf=data;})
  }



  ngOnInit() {
    this._rapidService.getSearch(this.str).subscribe((data) => {console.log(data); this.ser=data});
 }
  }


