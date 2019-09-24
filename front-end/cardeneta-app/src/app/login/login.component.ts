import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import {Auth} from './modelshahaha/auth';
import {DashComponent} from '../dash/dash.component';
import {LoginService} from "./login.service";
import { Routes} from '@angular/router';

@Injectable()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //Service Login;
  loginService: LoginService;
  autenticator: Autenticator;
  formBuilder: FormBuilder;
  formularioAuth: FormGroup;
  email:String = "";
  password:String = "";

  router: Router;

  
  constructor(loginService: LoginService, formBuilder: FormBuilder,router: Router) {
    this.loginService = loginService;
    this.formBuilder=formBuilder;
    this.criarForm();
    this.router = router;
    
  }


  post(){
    const data = this.formularioAuth.value;
    var user = new Auth(data.email,data.password);
   var result = this.loginService.getAuth(user.email,user.password);
   if(result){
        setTimeout( () => {this.router.navigate(['/dashboard']);},1000);
        this.loginService.createSessionUserAuth(user.email);
   }else{
     alert("Email ou password incorreto!");
   }
  

  }
  
  criarForm(){
    this.formularioAuth = this.formBuilder.group({

      email:[null],
      password: [null]
    });
  }

  ngOnInit() {
    

  }

}

  interface Autenticator{
    email: string,
    password: string

}
