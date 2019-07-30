import { Component, OnInit } from '@angular/core';
import {CursoService} from './cursos.service';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import {Curso} from '../models/Curso';


@Component({
  selector: 'app-list-cursos-app',
  templateUrl: './list-cursos-app.component.html',
  styleUrls: ['./list-cursos-app.component.css']
})
export class ListCursosAppComponent implements OnInit {

  cursoService: CursoService;
  formularioCurso: FormGroup;
  formBuilder: FormBuilder;
  router: Router;
  curso: Curso;

  constructor(cursoService: CursoService, formBuilder: FormBuilder,router: Router) { 
    this.cursoService = cursoService;
    this.formBuilder=formBuilder;
    this.router=router;
    this.criarForm();
  }


  criarForm(){
    this.formularioCurso = this.formBuilder.group({
        codigo: [null],
        nome: [null],
        professor: [null],
        quantidade_alunos: [null],
        idioma_id: [null]

    });
  }
  postInsert(){

    const data = this.formularioCurso.value;
    this.curso = new Curso(data.nome,data.codigo,data.professor,data.quantidade_alunos,data.idioma_id);
    var result = this.cursoService.insert(this.curso);
    if(result){
      // ok
    }else{
      // curso ja existe;
    }

  }

  getCursos(){
    var result = this.cursoService.getAll();
    if(result!=null){
      // ok
    }
  }

  ngOnInit() {
  }

}
