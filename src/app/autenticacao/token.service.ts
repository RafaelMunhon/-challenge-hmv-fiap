import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  retornaToken() {
    //console.log("tok " + localStorage.getItem(KEY));
    return localStorage.getItem(KEY) ?? '';
  }

  salvaToken(token: any) {
    localStorage.setItem(KEY, JSON.stringify(token));
  }

  excluiToken() {
    localStorage.removeItem(KEY);
  }

  possuiToken() {
    return !!this.retornaToken();
  }
  
}
