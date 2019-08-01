import { Component, OnInit } from '@angular/core';
import { CursosService } from '..cursos/cursos.service';

@Component({
  selector: 'app-receber-curso',
  templateUrl: './receber-curso.component.html',
  styleUrls: ['./receber-curso.component.css']
})
export class ReceberCursoComponent implements OnInit {

  curso: string;

  constructor(private cursosService: ) { }

  ngOnInit() {
    this.cursosService.exbirCursoCriado.subscribe(
      cursoCriado => this.curso = cursoCriado
    );
  }

}
