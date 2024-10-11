import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/class/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  loginUser(obj: User): Observable<any>{
    return this.http.post<any>("https://api.escuelajs.co/api/v1/auth/login", obj)
  }
}
