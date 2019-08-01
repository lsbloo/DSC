import { Component, OnInit } from '@angular/core';

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
