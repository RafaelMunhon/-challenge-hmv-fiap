import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { minusculoValidator } from './minusculo.validator';
import { NovoUsuario } from './novo-usuario';
import { NovoUsuarioService } from './novo-usuario.service';
import { UsuarioExisteService } from './usuario-existe.service';
import { usuarioSenhaIguaisValidator } from './usuario-senha-iguais.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;
  novaTriagemForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private usuarioExistenteServive: UsuarioExisteService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.novoUsuarioForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        fullName: ['', [Validators.required, Validators.minLength(4)]],
        userName: ['',[minusculoValidator],], // [this.usuarioExistenteServive.usuarioJaExite()],],
        password: ['', [Validators.required, Validators.minLength(4)],],
      },
      {
        validators: [usuarioSenhaIguaisValidator,],
      },
    );
  }  

  base64(): string {
    return btoa(this.novoUsuarioForm.get('password')?.value);
  }

  cadastrar(): void {

    if (this.novoUsuarioForm.valid) {
      
      console.log(btoa(this.novoUsuarioForm.controls['password'].value));

      let pass =  this.novoUsuarioForm.controls['password'].value;
      this.novoUsuarioForm.controls['password'].setValue(btoa(pass));
      
      
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;

      console.log(novoUsuario.password);
      
      this.novoUsuarioService.cadastraNovoUsuario(novoUsuario).subscribe({
        next: data => {
          if (data.status == true) {
            alert("Cadastro realizado com sucesso");
            this.router.navigate(['']);
          } else {
            alert("Erro ao realizar o cadastro, favor entrar em contato com o administrador");
          }
        },
        error: error => {
          if (error.status == 500) {
              alert(error.error.message);
              console.log(error.error.message);
          } else {
            alert(error);
          } 
        }
      });
    }
  }
}
