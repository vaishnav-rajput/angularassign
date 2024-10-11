import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/class/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private token : string | null = null;

  setToken(token: string){
    this.token = token;
  }

  getToken() : string | null{
    return this.token
  }

  isLoggedIn() : boolean {
    return this.token!== null
  }

  clearToken(){
    this.token = null;
  }

  loginUser(obj: User): Observable<any>{
    return this.http.post<any>("https://api.escuelajs.co/api/v1/auth/login", obj)
  }
}
