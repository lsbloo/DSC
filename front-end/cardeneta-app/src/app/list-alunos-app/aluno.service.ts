import { Injectable} from '@angular/core';
import {Aluno} from '../models/Aluno';


@Injectable()
export class AlunoService {
    aluno: Aluno;
    dataset: any;
    alunos_list = new Array<Aluno>();


    // -- :> 
    constructor(aluno: Aluno){
        this.aluno=aluno;
        this.dataset = new Map();
    }


    validate(aluno: Aluno) : any{
        if(this.dataset != null){
            for(var [key,value] of this.dataset){
                if(aluno.email == key){
                    return true;
                    break; }
            }
        }
        return false;
    }


    insert(aluno: Aluno): any{
        var result = this.validate(aluno);
        if(result){
            return false;
        }else{
            this.dataset.set(aluno.email, aluno);
            return true;
        }
    }

    update(){

    }

    getAll() : any {
        if(this.dataset != null){
            for(var [key,value] of this.dataset){
                this.alunos_list.push(value);
            }
        }
        return this.alunos_list;
    }

    delete(aluno: Aluno) : any{

        for(var [key,value] of this.dataset){
           if(key == aluno.email){
               this.dataset.delete(key);
               return true;
              
           }
    
        }

        return false;
    }
    
}