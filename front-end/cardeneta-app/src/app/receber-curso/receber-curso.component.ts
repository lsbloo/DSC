import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-receber-curso',
  templateUrl: './receber-curso.component.html',
  styleUrls: ['./receber-curso.component.css'],
  providers: [CursosService]
})
export class ReceberCursoComponent implements OnInit {

  curso: string;
  cursoService: CursosService;


  constructor(cursosService:  CursosService) {
    this.cursoService=cursosService;
   }

  ngOnInit() {
    CursosService.exibirCursoCriado.subscribe(
      cursoCriado => this.curso = cursoCriado
    );
  }

}
