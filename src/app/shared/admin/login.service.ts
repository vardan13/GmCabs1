import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
const apiUrl = "https://www.gmcabs.in/driver_api/login"
const apiUrl2 = "https://www.gmcabs.in/driver_api/signup"
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  login(Mobile){
return this.http.post(apiUrl,{"mobile":Mobile})
  }
  SignUp(Credentials){
    console.log(Credentials);
    JSON.stringify(Credentials)
    return this.http.post(apiUrl2,JSON.stringify(Credentials))
  }
}
