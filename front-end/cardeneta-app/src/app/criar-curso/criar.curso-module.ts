import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso.component';
import { ReceberCursoComponent } from '../receber-curso/receber-curso.component';


@NgModule({
  declarations: [
    CriarCursoComponent,
    ReceberCursoComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [CriarCursoComponent],
  providers: [CursosService],

})
export class CriarCursoModule { }
