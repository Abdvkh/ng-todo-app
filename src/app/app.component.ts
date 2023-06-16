import { Component } from '@angular/core';
import {Router} from "@angular/router";

import {AuthService} from "./auth/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  get isLoggedIn(): boolean {
    return this.authService.isLoggenIn;
  }
  constructor(
    private router: Router,
    private authService: AuthService
  ) {
  }

  public logout() {
    this.authService.logout();
    this.router.navigate(['auth', 'login']);
  }
}
