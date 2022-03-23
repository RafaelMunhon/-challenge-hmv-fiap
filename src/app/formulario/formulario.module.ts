import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioRoutingModule } from './formulario-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from '../componentes/mensagem/mensagem.module';
import { TriagemComponent } from './triagem/triagem.component';


@NgModule({
  declarations: [TriagemComponent],
  imports: [
    CommonModule,
    FormularioRoutingModule,
    FormsModule,
    MensagemModule,
    ReactiveFormsModule
  ]
})
export class FormularioModule { }

