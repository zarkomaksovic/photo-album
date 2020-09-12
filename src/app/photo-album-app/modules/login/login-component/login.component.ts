import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from 'src/app/photo-album-app/services/login.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  loginForm: FormGroup;
  constructor(
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      user_name: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  ngOnInit() {
  }
  // fake login method without BE authentication, to be replaced 
  login(userName: string, email: string) {
    this.subscription = this.loginService.login(userName, email).subscribe((res) => {
      if (res) {
        this.router.navigate(['../home/albums']);
      } else {
        console.error('error');
      }
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
