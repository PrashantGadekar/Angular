import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { RapidService } from '../rapid.service';

@Component({
  selector: 'app-art-details',
  templateUrl: './art-details.component.html',
  styleUrls: ['./art-details.component.css']
})
export class ArtDetailsComponent implements OnInit {

 public departmentId ;
 public inf=[];
  constructor(private route : ActivatedRoute, private _rapidService : RapidService) { }

  

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.departmentId = id;
    this._rapidService.getArtInfo(id).subscribe((data)=> {console.log(data); this.inf=data;})
    
  }

}
