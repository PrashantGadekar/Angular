import { Component, OnInit } from '@angular/core';
import { RapidService } from '../rapid.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl:'./home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public rapid =[];
  constructor(private _rapidService : RapidService, private router : Router) { }

  public str =[];
  getThem(value){
    console.log(value,"Inside the getThem function()");
    this._rapidService.getSearch(value).subscribe((data) => {console.log(data); this.str=data});
  }
  

  ngOnInit() {
    this._rapidService.getRapid()
                      .subscribe((data) => {console.log(data);this.rapid = data;});
 }
  
 onSelect(department){
  this.router.navigate(['/Info', department])
}

}
