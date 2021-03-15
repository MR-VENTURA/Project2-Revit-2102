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
  @Input() posts: Posts;  //Or Posts[] ?

  postmsg: string;

  constructor(private router: Router, private accountServ: AccountService,
    private postsServ: PostsService, private localStorage: LocalStorage) {
     this.getSession();
     this.viewPosts();

     this.posts.postId = 0;
     this.posts.authorId = 0;
     this.posts.likes = 0;
     this.posts.dislikes = 0;
  }

  ngOnInit(): void {
  }

  submitPost() {
     console.log(this.account + " submit post");
     // this.postsServ.submitPost().subscribe(
     //   res => {
     //     this.posts = res;
     //   }
     // );
   }
  //   this.postServ.submitPost()subscribe(
  //     (response: Posts[] => {
  //       this.posts = response;
  //     });
  // }
  //
  // updatePosts() {
  //   console.log("updating" + this.posts.postsId);
  //   this.postServ.updatePosts(this.postsId).subscribe(
  //     response: Posts[] => {
  //       this.posts = response;
  //     }
  //   );
  // }
  //
  viewPosts(){
    console.log("view posts");

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
