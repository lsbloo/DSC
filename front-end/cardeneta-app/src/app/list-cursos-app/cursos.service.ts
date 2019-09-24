import { Injectable} from '@angular/core';
import {Curso} from '../models/Curso';


@Injectable()
export class CursoService {
    curso: Curso;
    dataset: any;
    cursos_list = new Array<Curso>();


    // -- :> 
    constructor(curso: Curso){
        this.curso=curso;
        this.dataset = new Map();
    }


    validate(curso: Curso) : any{
        if(this.dataset != null){
            for(var [key,value] of this.dataset){
                if(curso.codigo == key){
                    return true;
                    break; }
            }
        }
        return false;
    }


    insert(curso: Curso): any{
        var result = this.validate(curso);
        if(result){
            return false;
        }else{
            this.dataset.set(curso.codigo, curso);
            return true;
        }
    }

    update(){

    }

    getAll() : any {
        if(this.dataset != null){
            for(var [key,value] of this.dataset){
                this.cursos_list.push(value);
            }
        }
        return this.cursos_list;
    }

    delete(curso: Curso) : any{

        for(var [key,value] of this.dataset){
           if(key == curso.codigo){
               this.dataset.delete(key);
               return true;
              
           }
    
        }

        return false;
    }
    
}