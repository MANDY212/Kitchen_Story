import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  oldPass: string = 'admin';
  newPass = '';
  constructor() {}

  ngOnInit(): void {}

  changePass(old: string, newp: string) {
    if (old === this.oldPass) {
      this.oldPass = newp;
      alert('Password has been changed');
    } else {
      alert('Please enter correct old password');
    }
  }
}
