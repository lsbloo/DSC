import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';
import { Cursos } from '../models/models';
providers: [CursosService];

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: string [] = [];
  cursosService: CursosService;

  constructor(_cursosService: CursosService) {
    //this.cursosService = new CursosService();
    this.cursosService = _cursosService;
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();

    CursosService.criarNovoCurso.subscribe(
      curso => this.cursos.push(curso)
    );
  }

}
