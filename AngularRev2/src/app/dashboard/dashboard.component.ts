import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../models/account';
import { AccountService } from '../services/account.service';
import { AccountStatus} from '../models/account-status';
import { PostsService } from '../services/posts.service';
import{ LocalStorage } from '../services/storage.service';
import { Posts } from '../models/posts';
import {Content } from '../models/content';
let loggedAccount = JSON.parse(localStorage.getItem("loggedUser"));

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() account: Account;
  @Input() posts: Posts[];  //Or Posts[] ?
  @Input() post: Posts;

  postmsg: string;

  constructor(private router: Router, private accountServ: AccountService,
    private postsServ: PostsService, private localStorage: LocalStorage) {

     this.getSession();
     this.viewPosts();

     this.post = new Posts();

     // this.posts.postId = 0;
     // this.posts.authorId = 0;
     // this.posts.likes = 0;
     // this.posts.dislikes = 0;
  }

  ngOnInit(): void {
  }

  submitPost() {
     console.log(loggedAccount.username + " submit post");
     //let loggedAccount = JSON.parse(localStorage.getItem("loggedUser"));

     const data = {
       postId: 0,
       authorId: loggedAccount,
       parentPostId: 0,
       flaggedForReview: false,
       likes: 0,
       dislikes: 0,
       lastActivityDate: 0,
       contentId: new Content(),
       message: this.postmsg,
       //postDate: null,
       enabled: true,
       image: ""
     }

     console.log(data.message);
     this.postsServ.submitPost(data).subscribe(
       res => {
         this.post = new Posts();
         console.log(res);
       },
       error => {
         console.log(error);
       });
   }

  getPost(postId) {
    console.log("get " + postId);
    this.postsServ.getPost(postId).subscribe(
      res => {
        this.post = res;
        console.log("getPost return " + res);
      }
    );
  }

  updatePost(post) {
    console.log("updating");

    const data = {
      postId: post.postId,
      authorId: post.authorId,
      lastActivityDate: post.lastActivityDate,
      contentId: post.contentId,
      parentPostId: post.parentPostId,
      dislikes: post.dislikes,
      likes: post.likes,
      message: this.postmsg
    }

    this.postsServ.updatePost(post.postId, data).subscribe(
      res => {
        console.log(data);
        console.log("returning " + res);
        this.post = new Posts();
      },
      error => {
        console.log(error);
      });
  }

  viewPosts(){
    console.log("view posts");
    this.postsServ.viewPosts().subscribe(
      posts => {
        this.posts = posts;
        console.log(posts);
        },
        error => {
        console.log(error);
      });
  }

  like(post) {
    console.log("like " + post);

    const data = {
      postId: post.postId,
       authorId: post.authorId,
       lastActivityDate: post.lastActivityDate,
       contentId: post.contentId,
       parentPostId: post.parentPostId,
       dislikes: post.dislikes,
       likes: post.likes + 1
    }

    this.postsServ.updatePost(post.postId, data).subscribe(
      res => {
        console.log(post.parentPostId);
        console.log("returning " + res);
        this.post = new Posts();
      },
      error => {
        console.log(error);
      });
  }

  hidePost(post) {
    console.log("hide " + post)

    const data = {
      postId: post.postId,
      authorId: post.authorId,
      lastActivityDate: post.lastActivityDate,
      contentId: post.contentId,
      parentPostId: post.parentPostId,
      dislikes: post.dislikes,
      likes: post.likes,
      enabled: false
    }
    this.postsServ.updatePost(post.postId, data).subscribe(
      res => {
        console.log("returning " + res);
        this.post = new Posts();
      },
      error => {
        console.log(error);
      });
  }

  dislike(post) {
    console.log("dislike " + post);

    const data = {
      postId: post.postId,
       authorId: post.authorId,
       lastActivityDate: post.lastActivityDate,
       contentId: post.contentId,
       parentPostId: post.parentPostId,
       likes: post.likes,
       dislikes: post.dislikes + 1
    }

    this.postsServ.updatePost(post.postId, data).subscribe(
      res => {
        console.log(data);
        console.log("returning " + res);
        this.post = new Posts();
      },
      error => {
        console.log(error);
      });
  }

  flagPost(post) {
    console.log("flag " + post);

    const data = {
      postId: post.postId,
       flaggedForReview: true,
       authorId: post.authorId,
       lastActivityDate: post.lastActivityDate,
       contentId: post.contentId
    }

    this.postsServ.updatePost(post.postId, data).subscribe(
      res => {
        console.log(data);
        console.log(data.authorId);
        console.log(data.contentId.message);
        console.log("returning " + res);
        this.post = new Posts();

      },
      error => {
        console.log(error);
      });
  }

  //For accounts

  closeAccount(account){

      const data = {
        peopleId: account.peopleId,
        accountStatuses: new AccountStatus(),
        statusId: 3,
        status: "Closed"
      }
      this.accountServ.updateAccount(account.peopleId, data).subscribe(
        res => {
          console.log("returning " + res);
          //this.account = new Account();
        },
        error => {
          console.log(error);
        });
  }

  //Administrator Ban abilities

  banAccount(account){
    const data = {
      peopleId: account.peopleId,
      accountStatuses: new AccountStatus(),
      statusId: 2,
      status: "Banned"
    }
    this.accountServ.updateAccount(account.peopleId, data).subscribe(
      res => {
        console.log("returning " + res);
        //this.account = new Account();
      },
      error => {
        console.log(error);
      });
  }

  unbanAccount(account){
    const data = {
      peopleId: account.peopleId,
      accountStatuses: new AccountStatus(),
      statusId: 1,
      status: "Active"
    }
    this.accountServ.updateAccount(account.peopleId, data).subscribe(
      res => {
        console.log("returning " + res);
        //this.account = new Account();
      },
      error => {
        console.log(error);
      });
  }

  getSession() {
    let loggedAccount = JSON.parse(localStorage.getItem("loggedUser"));
    console.log(loggedAccount); //JSON.parse(string
    console.log("User is " + loggedAccount.username);

    //this.account = loggedAccount;
    this.accountServ.getSession().subscribe(
      res => {
        if(res) {
          this.account = res;
          console.log(this.account, " dashboard");
          if(this.account.peopleId != null)
            this.router.navigate(['home']);
        }
      }
    )
  }
}
