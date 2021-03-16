import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../models/account';
import { AccountService } from '../services/account.service';
import { PostsService } from '../services/posts.service';
import{ LocalStorage } from '../services/storage.service';
import { Posts } from '../models/posts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() account: Account;
  @Input() posts: Posts[];  //Or Posts[] ?

  postmsg: string;

  constructor(private router: Router, private accountServ: AccountService,
    private postsServ: PostsService, private localStorage: LocalStorage) {
     this.getSession();
     this.viewPosts();

     // this.posts.postId = 0;
     // this.posts.authorId = 0;
     // this.posts.likes = 0;
     // this.posts.dislikes = 0;
  }

  ngOnInit(): void {
  }

  submitPost() {
     console.log(this.account + " submit post");

     const data = {
       postId: 0,
       authorId: 1,
       parentPostId: 0,
       flaggedForReview: false,
       likes: 0,
       dislikes: 0,
       lastActivityDate: 0
     }

     this.postsServ.submitPost(data).subscribe(
       res => {
         console.log(res);
       },
       error => {
         console.log(error);
       });
   }
  //   this.postServ.submitPost()subscribe(
  //     (response: Posts[] => {
  //       this.posts = response;
  //     });
  // }
  //
  updatePost() {
    console.log("updating");

    const data = {
      postId: 0,
      authorId: 1,//loggedAccount.peopleId,
      parentPostId: 0,
      flaggedForReview: true,
      likes: 10,
      dislikes: 0,
      lastActivityDate: 0
    }

    this.postsServ.updatePost(14, data).subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      });
  }
  //   this.postsServ.updatePost(14).subscribe(
  //     res => {
  //       this.posts = res;
  //       console.log(res)
  //     },
  //     error => {
  //       console.log(error);
  //     });
  // }

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
  //    this.postsServ.viewPosts().subscribe
  //      (response: Posts[]) => {
  //        this.posts = response;
  //      }
  //     (error: HttpErrorResponse) => {
  //        alert("Something is wrong" + error.message);
  //     }
  //    );
  // }

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
