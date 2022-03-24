import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';
import { sha256 } from 'js-sha256'
import { ValidateCPF } from '../novo-usuario/cpf.validador';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario:any = '';
  senha = '';

  constructor(
    private authService: AutenticacaoService,
    private router: Router
  ) {}

  ngOnInit(): void { }  

  login() {
    
    //console.log("user: "+ btoa(this.usuario) + "senha: " + btoa(this.senha));

    this.authService.autenticar(this.usuario, btoa(this.senha)).subscribe(
      (data) => {
        this.router.navigate(['formulario']);
      },
      (error) => {
        alert('Usuário ou senha inválidos');
        console.log(error);
      }
    );
  }
}
