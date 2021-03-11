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

  handleLogin(): Observable<Account> {
    //TODO: change url.
    return this.http.get('').pipe(
      map(res => res as Account)
    );
  }
}
