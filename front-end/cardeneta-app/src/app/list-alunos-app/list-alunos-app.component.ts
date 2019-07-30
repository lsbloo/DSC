import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import {Aluno} from '../models/Aluno';
import {AlunoService} from './aluno.service';



@Component({
  selector: 'app-list-alunos-app',
  templateUrl: './list-alunos-app.component.html',
  styleUrls: ['./list-alunos-app.component.css']
})
export class ListAlunosAppComponent implements OnInit {

  aluno: Aluno;
  fomularioAluno: FormGroup;
  formBuilder: FormBuilder;
  router: Router;
  alunoService: AlunoService;

  constructor(formBuilder: FormBuilder , alunoService: AlunoService, router: Router) {
    this.alunoService=alunoService;
    this.formBuilder=formBuilder;
    this.router=router;
    this.criarForm();
   }


  criarForm(){
    this.fomularioAluno = this.formBuilder.group({
        nome:[null],
        cpf:[null],
        responsavel:[null],
        contato: [null],
        endereco: [null],
        dataNascimento: [null],
        email: [null]
    });
  }
  postInsert(){

    const data = this.fomularioAluno.value;
    this.aluno = new Aluno(data.nome,data.cpf,data.responsavel,data.contato,data.endereco,data.dataNascimento,data.email);
    var result = this.alunoService.insert(this.aluno);
    if(result){
      // ok
    }else{
      // aluno ja existe;
    }

  }

  getCursos(){
    var result = this.alunoService.getAll();
    if(result!=null){
      // ok
    }
  }

  ngOnInit() {
  }

}
