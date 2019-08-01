import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-alunos-app',
  templateUrl: './list-alunos-app.component.html',
  styleUrls: ['./list-alunos-app.component.css']
})
export class ListAlunosAppComponent implements OnInit {

  cabecalho: string;
  texto: String;
  constructor() { 
    this.cabecalho = 'Alunos'
    this.texto = 'Nesta sessão você encontrará a lista de todos os alunos cadastrados em nossa instituição. A esquerda você encontrará nosso menu, onde terá acesso a todas as informações disponíveis no nosso sistema. Fique a vontade para navegar por nosso portal '
  }

  ngOnInit() {
  }

}
