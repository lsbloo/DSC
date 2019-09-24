import { Injectable } from '@angular/core';
import { User } from '../models/User';


@Injectable()
export class RegisterService{
    user: User;
    datasetRegister =null;

    constructor(){
        this.datasetRegister = new Map();
    }

    insertUser(user: User){
        this.datasetRegister(user.email,user.password);
    }

    registerUser(email: String , password: String , password_confirm: String) : any{
        if(email.length!=0 || password.length != 0 || password_confirm.length != 0){
            if(password == password_confirm){
                var u = new User(email,password,password_confirm);
                this.insertUser(u);
                return true;
            }else{
                return false;
            }
        }
        return false;
    }

}