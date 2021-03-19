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
  //Manipulated post
  @Input() post: Post;
  postComments: Post[];
  postDate: string;
  

  //Check if comment button is clicked.
  isClicked: boolean;

  //Post interactions
  isLiked: boolean;
  isDisliked: boolean;
  comment: string;

  //Copy of the original post directly from database.
  originalPost: Post;

  isLoading: boolean;
  isSuccessful: boolean;



  constructor(private accountServ: AccountService, private postService: PostService) {
    this.isClicked = false;
    this.isLiked = false;
    this.isDisliked = false;
    this.postDate = '';
    this.isLoading = false;
    this.isSuccessful = false;
  }

  ngOnInit(): void {
    //Copy the original post.
    this.originalPost = JSON.parse(JSON.stringify(this.post));
    this.calcDate();

    
    this.getComments();
  }

  calcDate() {
    //Alter date into better format.
    let utc: any = this.post.contentId.postDate;
    let d = new Date(0);
    d.setUTCSeconds(utc);
    this.postDate = d.getMonth()+1 + '/' + d.getDate() + '/' + d.getFullYear();
  }

  getComments() {
    this.isLoading = true;
    this.postService.getComments(this.originalPost.postId).subscribe(
      res => {
        this.postComments = res;
        this.isLoading = false;
      },
      err => {
        console.log("no comments");
        this.isLoading = false;
      }
    );
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
    console.log('cliked add comments main func', this.userAccount, this.comment);
    this.accountServ.submitPost(this.userAccount, this.comment).subscribe(
      res => {
        this.accountServ.getOnePost(res.postId).subscribe(
          resp => {
            resp.parentPostId = this.originalPost;
            this.postService.updatePost(resp).subscribe(
              response => {
                //set comment back to blank.
                this.comment = "";
                this.isClicked = false;
                this.getComments();
                this.calcDate();
                this.onSuccess();
              }
            )
          }
        )
      }
    )
  }

  onSuccess() {
    this.isSuccessful = true;
    setTimeout(() => {
      this.isSuccessful = false;
      document.body.style.overflowY = 'auto';
    }, 1600);
  }
}
