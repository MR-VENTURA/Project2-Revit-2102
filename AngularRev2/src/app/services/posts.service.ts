import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Posts } from '../models/posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  public submitPost(data : Posts): Observable<Posts> {
    return this.http.post('http://localhost:8081/revit/posts', data).pipe(
      map(res => res as Posts) );
  };

//   public viewPosts(postId: number, authorId: number, likes: number, dislikes: number):  Observable<Posts> {
//     const data = {
//       postId,
//       authorId,
//       likes,
//       dislikes
// //      lastActivityDate
//     }
//     return this.http.get('http://localhost:8081/revit/posts').pipe(
//       map(res => res as Posts) );
//   };
      public viewPosts() : Observable<Posts[]> {
        return this.http.get<Posts[]>('http://localhost:8081/revit/posts');
      }

  public getPost(postId): Observable<Posts> {
    return this.http.get('http://localhost:8081/revit/posts/' + postId).pipe(
    map(res => res as Posts));
  }

  public updatePost(postId : any, data: any): Observable<any> {
    return this.http.put('http://localhost:8081/revit/posts/'+ postId, data).pipe(
    map(res => res as Posts) );
  };
}
