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
  set token(token: string)  {
    localStorage.setItem('token', token);
  }
  get token(): string | null {
    return localStorage.getItem('token');
  }
  set userID(userID: string)  {
    localStorage.setItem('userID', userID);
  }
  get userID(): string | null {
    return localStorage.getItem('userID');
  }

  get isLoggenIn(): boolean {
    return !!this.token && !!this.userID;
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  public authenticate(body: any/*{username: string, password: string}*/) {
    return this.httpClient.post<LoginResponse>('/api/auth/token/login/', body);
  }

  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userID');
  }

}
