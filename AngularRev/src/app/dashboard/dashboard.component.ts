import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../models/account';
import { Content } from '../models/content';
import { Post } from '../models/post';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() account: Account;
  
  postmsg: string;
  posts: Post;

  newPost: Post;
  newContent: Content;

  constructor(private router: Router, private accountServ: AccountService) {}

  ngOnInit(): void {
    this.getSession();
    this.getPosts();
  }

  getSession() {
    this.accountServ.getSession().subscribe(
      res => {
        if(res) {
          this.account = res;
          console.log(this.account, " dashboard");
          if(this.account.peopleId != null)
            this.router.navigate(['home']);
        }
      },
      error => {
        this.router.navigate(['/']);
      }
    )
  }

  getPosts() {
    this.accountServ.getPosts().subscribe(
      res => {
        if(res) {
          this.posts = res;
        }
      }
    )
  }

  submitPost() {
    this.newPost = new Post();
    this.newPost.postId = null;
    this.newPost.authorId = this.account;
    this.newPost.parentPostId = null;
    this.newPost.flaggedForReview = false;
    this.newPost.likes = 0;
    this.newPost.dislikes = 0;
    this.newPost.lastActivityDate = null;
    this.newContent = new Content();
    this.newContent.enable = true;
    this.newContent.message = this.postmsg;
    this.newContent.image = "";
    this.newPost.contentId = this.newContent;

    this.accountServ.submitPost(this.newPost).subscribe(
      res => {
        if(res) {
          this.getPosts();
        }
      }
    )
  }
}