import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn = false;
  set isLoggedIn(state: boolean)  {
    this._isLoggedIn = state;
  }
  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  public authenticate(body: any/*{username: string, password: string}*/) {
    return this.httpClient.post('/api/auth/token/login/', body);
  }
}
