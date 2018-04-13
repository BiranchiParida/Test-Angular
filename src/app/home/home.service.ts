import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
//Interceprts wil not hit in http please use HttpClient 
@Injectable()
 export class HomeService
 {
     Url="http://localhost:59391/api/values";
public constructor( public http: HttpClient)
{

}
 
 GetData(id,id1):Observable<string>
 {
      var data= new URLSearchParams();
      data.append("Name",id);
      data.append("age",id1);
     return this.http.get(this.Url+"?"+data)
       .catch((error: any) => Observable.throw(error.json().error || 'Server error')); 
 }
 
 }