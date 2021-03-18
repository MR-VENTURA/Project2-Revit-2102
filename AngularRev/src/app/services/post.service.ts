import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Account } from '../models/account';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Content } from '../models/content';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  updatePost(newPost: Post): Observable<Post> {
    return this.http.put(`http://localhost:8081/revit/posts/${newPost.postId}`, newPost, {withCredentials: true}).pipe(
      map(res => res as Post)
    );
  }
  
  addComment(account: Account, prior: Post, msg: string): Observable<Post> {
    let post = new Post();
    post.postId = null;
    post.authorId = account;
    //@ts-ignore: for mapping to db
    post.parentPostId = null;
    post.flaggedForReview = false;
    post.likes = 0;
    post.dislikes = 0;
    let newContent = new Content();
    newContent.enable = true;
    newContent.message = msg;
    newContent.image = "";
    post.contentId = newContent;

    return this.http.post('http://localhost:8081/revit/posts', post, {withCredentials: true}).pipe(
      map(res => res as Post)
    );
  }
}
