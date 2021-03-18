import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { Account } from '../models/Account';
import { AccountService } from '../services/account.service';
import { PostService } from '../services/post.service';
import { Content } from '../models/content';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() userAccount: Account;
  @Input() post: Post;
  isClicked: boolean;

  isLiked: boolean;
  isDisliked: boolean;

  comment: string;
  originalPost: Post;

  constructor(private accountServ: AccountService, private postService: PostService) {
    this.isClicked = false;
    this.isLiked = false;
    this.isDisliked = false;
  }

  ngOnInit(): void {
    //Copy the original post.
    this.originalPost = JSON.parse(JSON.stringify(this.post));
    let utc: any = this.post.contentId.postDate;
    let d = new Date(0);
    d.setUTCSeconds(utc);
    this.post.contentId.postDate = d;
  }

  clickedLike() {
    this.isLiked = !this.isLiked;
    if(this.isLiked) {
      this.originalPost.likes += 1;
      //Check if disliked is true, if so, set it to false.
      if(this.isDisliked)
        this.clickedDislike();
    } else {
      this.originalPost.likes -= 1; 
    }
    this.postService.updatePost(this.originalPost).subscribe(
      res => {
        //this.post = res;
      }
    );
  }

  clickedDislike() {
    this.isDisliked = !this.isDisliked;
    if(this.isDisliked) {
      this.originalPost.dislikes += 1;
      //Check if liked is true, if so, set it to false.
      if(this.isLiked)
        this.clickedLike();
    } else {
      this.originalPost.dislikes -= 1;
    }
    this.postService.updatePost(this.originalPost).subscribe(
      res => {
        //this.post = res;
      }
    );
  }

  addComment() {
    this.accountServ.submitPost(this.userAccount, this.comment).subscribe(
      res => {
        this.accountServ.getOnePost(res.postId).subscribe(
          resp => {
            resp.parentPostId = this.originalPost;
            this.postService.updatePost(resp).subscribe(
              response => {
                //console.log('updated post', response);
              }
            )
          }
        )
      }
    )
  }

  test() {
    // @ts-ignore: Allow parent post id to be an integer.
    this.originalPost.parentPostId = this.originalPost.parentPostId;
    this.postService.updatePost(this.originalPost).subscribe(
      res => {
        //this.post = res;
        console.log('updated post', this.post);
      }
    );
  }


}
