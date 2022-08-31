import { Component, OnInit } from '@angular/core';
import { LoginService } from '../servies/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  constructor(public service: LoginService) {}

  ngOnInit(): void {}

  loginHandler(): void {
    this.service.authenticate(this.username, this.password);
  }
}
