import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NovaTriagem } from './triagem';

@Injectable({
  providedIn: 'root'
})
export class TriagemService {

  constructor(private http: HttpClient) {}

  cadastraTriagem(novoCadastro: NovaTriagem , token : any) {
    let header = new HttpHeaders().set("token", token);
    return this.http.post('https://challenge-registration.herokuapp.com/api/triage', novoCadastro, {headers: header} );
  }
}