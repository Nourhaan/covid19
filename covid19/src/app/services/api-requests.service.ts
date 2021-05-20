import { environment } from '../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestsService {

  constructor(private route: Router, private http: HttpClient) { }


  private setHeaders(): HttpHeaders {


    let headersConfig =
    {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    return new HttpHeaders(headersConfig);
  }
  private formatErrors(error: any) {
    console.error(error);
    if (error.status == "401") {
      this.route.navigateByUrl("/login")
    }
    return Observable.throw(error);
  }

  getCountries():Observable<any> {
    return this.http.get(`${environment.api_url}/countries`, {headers: this.setHeaders() })
    .pipe(catchError(er=>this.formatErrors(er)),map(res => { return res }));
  }

  getCountry( country:string):Observable<any> {
    return this.http.get(`${environment.api_url}/countries/${country}`, {headers: this.setHeaders() })
    .pipe(catchError(er=>this.formatErrors(er)),map(res => { return res }));
  }

}
