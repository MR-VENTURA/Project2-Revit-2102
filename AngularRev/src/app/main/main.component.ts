import { Component, OnInit } from '@angular/core';
import { Account } from '../models/account';
import { AccountRole } from '../models/account-role';
import { AccountStatus } from '../models/account-status';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  userAccount: Account;

  constructor() {
    this.userAccount = new Account();
    this.userAccount.peopleId = null; // Set id == null. Check if id is null. Not logged in.
    this.userAccount.accountRoles = new AccountRole();
    this.userAccount.accountStatuses = new AccountStatus();
    this.userAccount.username = '';
    this.userAccount.userPass = '';
  }

  ngOnInit(): void {
  }

}
