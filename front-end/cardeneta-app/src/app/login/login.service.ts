import { Injectable } from '@angular/core';


/**
 * responsavel por todas interações de login/default;
 * @author osvaldoairon
 */
@Injectable()
export class LoginService {
    credentials = null;


    constructor(){
        this.credentials = new Map();
        this.setCredentialsDefaultLogin();
    }

    setCredentialsDefaultLogin(){
        this.credentials.set("osvaldo.airon@dce.ufpb.br","1234");
        this.credentials.set("vinicius.matheus@dce.ufpb.br","1234");
        this.credentials.set("rodrigovilar@dce.ufpb.br","1234");
        this.credentials.set("guthyelvis.santos@dce.ufpb.br","1234");
        this.credentials.set("alberis","1234");
    }
    

    /**
     * 
     */
    createSessionUserAuth(email:String){
                sessionStorage.setItem(<string>email,<string>email);
    }

    
    /**
     * retorna a autenticação de usuaarios default;
     * @param login 
     * @param password 
     */
    getAuth(login: String, password:String) : any {
        for(var [key,value] of this.credentials){
            if(login == key && password == value){
                return true;
                break;
            }
        }
        return false;
    }
}