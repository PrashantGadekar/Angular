import { Component, OnInit } from '@angular/core';
import { RapidService } from '../rapid.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-searchify',
  templateUrl: './searchify.component.html',
  styleUrls: ['./searchify.component.css']
})
export class SearchifyComponent implements OnInit {

 
  constructor(private _rapidService : RapidService, private router : Router) { }

 
  public ser=[];
  public inf=[];
  public str;
  public artist_name ="";
  public album_name ="";
  public showinfo = false;
  
  getThem(value){
    this.str = value;
    console.log(value,"Inside the getThem function()");
    this._rapidService.getSearch(value).subscribe((data) => {console.log(data); this.ser=data});
  }

  //getBoth(value1,value2){
    //this.artist_name = value1;
    //this.album_name = value2;
    //console.log(value1,value2,"Inside the getboth function()");
    //this._rapidService.getArtInfo(value1,value2).subscribe((data)=> {console.log(data); this.inf=data;})
  //}
   
    add_to(value1,value2,value3){
      console.log(value1);
      console.log(value2);
      this._rapidService.add_fav(value1,value2,value3);
    }

  //set(){
    //this.showinfo =true;
  //}

  



  ngOnInit() {
    this._rapidService.getSearch(this.str).subscribe((data) => {console.log(data); this.ser=data});
 }

 onSelect(department){
       this.router.navigate(['/Info', department])
 }
  }


