import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  handleLogin(username: string, password: string): Observable<Account> {
    //TODO: change url.
    const data = {
      username,
      password
    }
    return this.http.post('http://localhost:8081/revit/user/login', data).pipe(
      map(res => res as Account)
    );
  }
}
