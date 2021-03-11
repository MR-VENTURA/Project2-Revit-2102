import { Component, OnInit } from '@angular/core';
import { Account } from '../models/account';
import { AccountRole } from '../models/account-role';
import { AccountStatus } from '../models/account-status';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userAccount: Account;
  username: string;
  password: string;

  constructor(private accountServ: AccountService) {
    this.username = '';
    this.password = '';
    this.userAccount = new Account();
    this.userAccount.id = null; // Set id == null. Check if id is null. Not logged in.
    this.userAccount.accountRole = new AccountRole();
    this.userAccount.accountStatus = new AccountStatus();
    this.userAccount.username = '';
    this.userAccount.userpass = '';
  }

  ngOnInit(): void {
  }

  handleLogin() {
    console.log('handle this login', this.username, this.password);
  }
}
