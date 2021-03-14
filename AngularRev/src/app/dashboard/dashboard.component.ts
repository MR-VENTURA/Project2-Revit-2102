import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  
  constructor(private router: Router, private accountServ: AccountService) {
    this.getSession();
  }

  ngOnInit(): void {
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
      }
    )
  }

  
}