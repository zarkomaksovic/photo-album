import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  user = new User();
  constructor() {
    this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // get user value without subscribe
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }


  // fake login logic, to be replaced with BE authentication
  login(userName: string, email: string) {

    if (userName === 'testUser' && email === 'test@test.com') {
      this.user.email = email;
      this.user.userName = userName;
      this.user.authData = window.btoa(userName + ':' + email);
      // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(this.user));
      this.currentUserSubject.next(this.user);
    } else {
      this.currentUserSubject.next(null);
    }
    return this.currentUserSubject;
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
