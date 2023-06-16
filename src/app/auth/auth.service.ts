import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface LoginResponse {
  token: string;
  username: string;
  user_id: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn = false;
  set token(token: string)  {
    localStorage.setItem('token', token);
  }
  get token(): string | null {
    return localStorage.getItem('token');
  }
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
    return this.httpClient.post<LoginResponse>('/api/auth/token/login/', body);
  }
}
