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
  cabecalho: string;
  texto: String;
  constructor() { 
    this.cabecalho = 'Turmas'
    this.texto = 'Nesta sessão você encontrará a lista de todos as turmas cadastradas em nossa instituição. A esquerda você encontrará nosso menu, onde terá acesso a todas as informações disponíveis no nosso sistema. Fique a vontade para navegar por nosso portal '
  }

  ngOnInit() {
  }

}
