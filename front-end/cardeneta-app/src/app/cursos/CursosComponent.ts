import { Component, OnInit } from '@angular/core';

import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
})
export class CusosComponent implements OnInit {

  cursos: string[] = [];
  cursosService: CursosService;

  constructor(cursosService: CursosService) { 
      this.cursosService=cursosService;

  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
  }

}