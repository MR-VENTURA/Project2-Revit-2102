import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { Account } from '../models/Account';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  constructor(private accountServ: AccountService) { }

  ngOnInit(): void {
    let utc: any = this.post.contentId.postDate;
    let d = new Date(0);
    d.setUTCSeconds(utc);
    this.post.contentId.postDate = d;
  }
}
