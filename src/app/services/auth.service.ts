import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(uname: string, pword: string) {
    if (uname === 'Ben' && pword === 'asdf') {
      return 200;
    } else {
      return 403;
    }
  }
}
