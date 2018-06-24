import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ConversorComponent } from './components';
import { MoedaService, ConversorService } from './services';
import { NumeroDirective } from './directives';
import { ModalCotacaoComponent } from './utils';
import { DataBrPipe } from './pipes';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
  	ConversorComponent,
  	NumeroDirective,
  	ModalCotacaoComponent,
  	DataBrPipe
  ],
  /**exports pq o componente usa rotas e
  ele sera utilizado diretamente no módulo da aplicao*/
  exports: [
  	ConversorComponent,
  ],
  providers: [
    MoedaService,
    ConversorService
  ]
})
export class ConversorModule { }
