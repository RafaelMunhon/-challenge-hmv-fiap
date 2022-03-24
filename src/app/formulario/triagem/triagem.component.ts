import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { minusculoValidator } from './minusculo.validator';
import { NovaTriagem } from './triagem';
import { TriagemService } from './triagem.service';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { TokenService } from 'src/app/autenticacao/token.service';
import { Usuario } from 'src/app/autenticacao/usuario/usuario';

@Component({
  selector: 'app-triagem',
  templateUrl: './triagem.component.html',
  styleUrls: ['./triagem.component.css'],
})
export class TriagemComponent implements OnInit {

  private user : Usuario | any;
  urgencyRank = "";

  novaTriagemForm: FormGroup = new FormGroup ({
    userId: new FormControl(''),
    heartAttack: new FormControl('Não',[Validators.required],),
    heartAttackKinship: new FormControl(''),
    obese: new FormControl('',[Validators.required]),
    medication: new FormControl('',[Validators.required]),
    medicationWhich: new FormControl(''),
    allergy: new FormControl('',[Validators.required]),
    drugAllergy: new FormControl(''),
    pain: new FormControl('',[Validators.required]),
    painLevel: new FormControl('',[Validators.required]),
    painSite: new FormControl('',[Validators.required]),
    painCauses: new FormControl('',[Validators.required]),
    painFrequency: new FormControl('',[Validators.required]),
    painActivities: new FormControl('',[Validators.required]),
    painDuration: new FormControl('',[Validators.required]),
    
  },);

  constructor(
    private formBuilder: FormBuilder,
    private novaTriagemService: TriagemService,
    private usuarioService: UsuarioService,
    //private tokenService: TokenService,
    //private novoUsuarioService: NovoUsuarioService,

    private router: Router
  ) {}

  ngOnInit(): void {
    
    this.usuarioService.retornaUsuario().subscribe(data => {
        this.user = data;
    });

  }

  enviarTriagem(): void {
    //const usuarioSessao:any = this.tokenService.retornaToken();
    //let getUser = JSON.parse(usuarioSessao) 

    this.getDadosUsuario();
    
    const novaTriagem = this.novaTriagemForm.getRawValue() as NovaTriagem;   
   
    this.novaTriagemService.cadastraTriagem(novaTriagem,this.user.token).subscribe({
    next: data => {
        
        //alert( data.urgencyRank);
        alert(this.getPrioridade());
        this.novaTriagemForm.reset();
      
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
    
      /*this.novaTriagemService.cadastraTriagem(novaTriagem,this.user.token).subscribe(
        () => {
          alert('Formulario enviado com sucesso');
        },
        (error: any) => {
          alert('Erro ao enviar triagem');
          console.log(error);
        }
      );*/
    }


    getDadosUsuario(){
      this.novaTriagemForm.controls['userId'].setValue(this.user.id);
    }

    getPrioridade(){
      
      let prioridade = this.novaTriagemForm.controls['painLevel'].value;

      if (prioridade < 4) {
        return "Pouco Urgente";
      } else if ((prioridade > 3) && (prioridade < 7)){
        return "Atendimento prioritario";
      } else {
        return "Urgente"; 
      }
    }
}
