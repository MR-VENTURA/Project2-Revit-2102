import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Account } from '../models/account';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  handleLogin(username: string, password: string): Observable<Account> {
    const data = {
      username,
      password
    }
    return this.http.post('http://localhost:8081/revit/user/login', data, {withCredentials: true}).pipe(
      map(res => res as Account)
    );
  }
  
  getSession(): Observable<Account> {
    return this.http.get('http://localhost:8081/revit/user', {withCredentials: true}).pipe(
      map(res => res as Account)
    );
  }



  //posts
  getPosts(): Observable<Post> {
    return this.http.get('http://localhost:8081/revit/posts', {withCredentials: true}).pipe(
      map(res => res as Post)
    );
  }

  submitPost(post: Post): Observable<Post> {
    return this.http.post('http://localhost:8081/revit/posts', post, {withCredentials: true}).pipe(
      map(res => res as Post)
    );
  }
}
