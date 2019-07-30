import { Component, OnInit } from '@angular/core';
import {RegisterService} from './register.service';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {User} from '../models/User';

@Component({
  selector: 'app-register-app',
  templateUrl: './register-app.component.html',
  styleUrls: ['./register-app.component.css']
})
export class RegisterAppComponent implements OnInit {

  registerService: RegisterService;
  formBuilder: FormBuilder;
  formularioRegister: FormGroup;
  router: Router;
  user: User;

  // --> 
  constructor(registerService: RegisterService, formularioRegister: FormGroup, router: Router) {
    this.registerService=registerService;
    this.formularioRegister=formularioRegister;
    this.router=router;
   }

  ngOnInit() {
  }

}
