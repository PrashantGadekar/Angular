import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPage} from './page';
import {Observable} from 'rxjs';
import { getLocaleMonthNames } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class RapidService {
  private _url : string = "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=0d7f82aa3185307e0850e6881f482541&limit=30&format=json";
  private _url2 : string = "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=0d7f82aa3185307e0850e6881f482541&limit=50&format=json";
  private _surl1 : string ="http://ws.audioscrobbler.com/2.0/?method=album.search&album=";
  private _surl2 : string = "&api_key=0d7f82aa3185307e0850e6881f482541&format=json";
  private _surl1_2 : string = "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=0d7f82aa3185307e0850e6881f482541&artist=Cher&album=Believe&format=json";
  private _iurl1  : string ="";
  private _iurl2 : string ="";
  private _iurl3 : string ="";
  constructor(private http : HttpClient) { }

  getRapid(): Observable<IPage[]>{
    return this.http.get<IPage[]>(this._url);
  }

  getTopSongs(): Observable<IPage[]>{
    return this.http.get<IPage[]>(this._url2);
  }

  getSearch(value): Observable<IPage[]>{
    console.log(value);
    let _url3 = this._surl1+value+this._surl2;
    console.log(_url3);
    return this.http.get<IPage[]>(_url3);
  }

  getArtInfo(value1,value2): Observable<IPage[]>{
    console.log(value1,value2);
    let _url4= this._surl1_2;
    console.log(value1,value2);
    return this.http.get<IPage[]>(_url4);
  }
}
