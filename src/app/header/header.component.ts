import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../servies/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isAdmin: boolean = sessionStorage.getItem('isAdmin') === 'true';
  isLoggedIn: boolean = sessionStorage.getItem('isLoggedIn') === 'true';
  constructor(public router: Router, public service: LoginService) {}

  ngOnInit(): void {}

  logout(): void {
    sessionStorage.removeItem('isAdmin');
    sessionStorage.removeItem('isLoggedIn');
    this.service.logout();
  }
}
