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

  public submitPost(posts : Posts): Observable<Posts> {
    return this.http.post('http://localhost:8081/revit/posts', posts).pipe(
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

  public updatePost(postId : any, value: any): Observable<Posts> {
    return this.http.put('http://localhost:8081/revit/posts/'+ postId, value).pipe(
      map(res => res as Posts) );
  };

}
