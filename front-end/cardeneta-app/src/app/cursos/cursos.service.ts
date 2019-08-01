import { Injectable, EventEmitter } from '@angular/core';

import { LogService } from '../shared/log.service';

@Injectable()
export class CursosService {

    exibirCursoCriado: any;
   static  criarNovoCurso = new EventEmitter<string>();


    private cursos: string[] = ['Inglês', 'Espanhol', 'Outros'];

    constructor(private logService: LogService){
        console.log('CursosService');
        this.exibirCursoCriado = new EventEmitter<string>();
    }

    getCursos() {
        this.logService.consoleLog('Lista de Cursos')
        return this.cursos;
    }

    addCursos(curso: string){
        this.logService.consoleLog('Criando novo curso' + curso)
        this.cursos.push(curso);
        this.exibirCursoCriado.emit(curso);
        CursosService.criarNovoCurso.emit(curso);
    }
}