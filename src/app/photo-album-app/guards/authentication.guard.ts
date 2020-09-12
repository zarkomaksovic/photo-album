import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
  }

  canActivate(): any {

    const user = localStorage.getItem('currentUser');
    const serviceUser = this.loginService.currentUserValue;
    console.log(serviceUser);
    if (user && serviceUser) {
      return true;
    } else {
      this.router.navigate(['../login']);
      return false;
    }
  }
}
