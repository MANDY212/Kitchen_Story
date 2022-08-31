import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(public router: Router) {}

  authenticate(username: any, password: any) {
    if (username === 'admin' && password === 'admin') {
      this.router.navigate(['products']);
      sessionStorage.setItem('isAdmin', 'true');
      sessionStorage.setItem('isLoggedIn', 'true');
    } else if (username === 'user' && password === 'user') {
      this.router.navigate(['products']);
      sessionStorage.setItem('isAdmin', 'false');
      sessionStorage.setItem('isLoggedIn', 'true');
    }
  }

  logout() {
    this.router.navigate(['login']);
  }
}
