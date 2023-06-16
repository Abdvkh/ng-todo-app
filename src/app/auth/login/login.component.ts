import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private authService: AuthService) {
  }
  public login = new FormGroup({
    username: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required])
  })

  public signIn() {
    this.authService.authenticate(this.login.value).subscribe((response) => {
      this.authService.isLoggedIn = !!response;
    })
  }
}
