import { Injectable } from '@angular/core';


/**
 * responsavel por todas interações de login/default;
 * @author osvaldoairon
 */
export class LoginService {
    credentials = null;

    constructor(){
        this.credentials = new Map();
        this.setCredentialsDefaultLogin();
    }

    setCredentialsDefaultLogin(){
        this.credentials.set("osvaldo","1234");
        this.credentials.set("vinicius","1234");
        this.credentials.set("rodrigo","1234");
        this.credentials.set("gutho","1234");
        this.credentials.set("alberis","1234");
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