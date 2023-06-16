import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {AuthService} from "../auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }
  public login = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required])
  })

  public signIn() {
    this.authService.authenticate(this.login.value).subscribe((response) => {
      this.authService.isLoggedIn = !!response.token;
      this.authService.token = response.token;
      const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      this.router.navigateByUrl(returnUrl);
    })
  }
}
