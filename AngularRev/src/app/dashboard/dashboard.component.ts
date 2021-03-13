import { Component, Input, OnInit } from '@angular/core';
import { Account } from '../models/account';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() account: Account;

  postmsg: string;
  
  constructor(private accountServ: AccountService) {
    console.log("test");
  }

  ngOnInit(): void {
  }
}