import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../models/account';
import { AccountStatus } from '../models/account-status';
import { AccountRole } from '../models/account-role';
import { AccountService } from '../services/account.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    @Input() account: Account;

    originalAccount: Account;

  constructor(private router: Router, private accountServ: AccountService) { }


  ngOnInit(): void {
    this.getBanned();
    let originalAccount = this.account;
  }

  getBanned() {
    this.accountServ.getBanned().subscribe(
      account => {
        if(account) {
          this.account = account;
        }
      }
    )
  }

  clickedUnban(){
      this.originalAccount.accountStatuses.statusId = 1;
      this.originalAccount.accountStatuses.status = "Active";
      console.log("Unban " + this.originalAccount.username);

    this.accountServ.updateAccount(this.originalAccount).subscribe(
      res => {
        //this.post = res;
      }
    );
  }

}
