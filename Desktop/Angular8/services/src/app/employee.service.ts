import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable, throwError } from 'rxjs';
import { catchError, retry} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url : string ="assets/data/employees1.json";

  constructor(private http : HttpClient) { }

 getEmployees() : Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
                    .pipe(
                      
                      catchError(this.errorHandler)
                      );
  }

  errorHandler(error : HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
}
