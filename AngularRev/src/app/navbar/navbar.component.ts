import { Component, Input, OnInit } from '@angular/core';
import { Account } from '../models/account';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() account: Account;

  constructor() {}

  ngOnInit(): void {
  }

}
