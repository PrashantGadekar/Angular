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
  private _surl1_2 : string = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=0d7f82aa3185307e0850e6881f482541&format=json";
  private _iurl1  : string ="http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=";
  private _iurl2 : string ="&api_key=0d7f82aa3185307e0850e6881f482541&format=json";
  private _iurl3 : string ="&format=json";
  private json_url : string="http://localhost:3000/playlist";
  private _aurl1 :string ="http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=0d7f82aa3185307e0850e6881f482541&artist=";
  private _aurl2 :string ="&track=";
  private _aurl3 :string ="&format=json";

  private data ={
     artist : "",
     album:"",
     src:"",
     comment :""
  }
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

  getArtInfo(value1): Observable<IPage[]>{
    console.log(value1);
    let _url4= this._iurl1+value1+this._iurl2;
    console.log(value1);
    return this.http.get<IPage[]>(_url4);
  }

  getTrackInfo(value1,value2): Observable<IPage[]>{
    console.log(value1);
    let _url4= this._aurl1+value1+this._aurl2+value2+this._aurl3;
    console.log(value2);
    return this.http.get<IPage[]>(_url4);
  }

  add_fav(value1,value2,value3){
    this.data.artist = value1;
    this.data.album =value2;
    this.data.src=value3;
    this.http.post(this.json_url,this.data).toPromise();
  }

  get_fav(){
    return this.http.get(this.json_url);
  }

  remove(val){
    return this.http.request('delete', this.json_url+"/"+val);
    
  }


}
