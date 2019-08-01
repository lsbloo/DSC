import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-turma-app',
  templateUrl: './list-turma-app.component.html',
  styleUrls: ['./list-turma-app.component.css']
})
export class ListTurmaAppComponent implements OnInit {
  cabecalho: string;
  texto: String;
  constructor() { 
    this.cabecalho = 'Turmas'
    this.texto = 'Nesta sessão você encontrará a lista de todos as turmas cadastradas em nossa instituição. A esquerda você encontrará nosso menu, onde terá acesso a todas as informações disponíveis no nosso sistema. Fique a vontade para navegar por nosso portal '
  }
    
  ngOnInit() {
  }

}
