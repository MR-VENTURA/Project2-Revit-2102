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

  isSuccessful: boolean;

  constructor(private router: Router, private accountServ: AccountService) {}

  ngOnInit(): void {
    this.getSession();
    this.isSuccessful = false;
  }

  getSession() {
    this.accountServ.getSession().subscribe(
      res => {
        if(res) {
          this.account = res;
          if(this.account.peopleId != null) {
            this.router.navigate(['home']);
            this.getPosts();
          }
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
    this.accountServ.submitPost(this.account, this.postmsg).subscribe(
      res => {
        if(res) {
          this.getPosts();
          this.onSuccess();
          //reset post form.
          this.postmsg = "";
        }
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