import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, ɵSWITCH_COMPILE_NGMODULE__POST_R3__, Component } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {RegisterService} from './register-app/register.service';

import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { LoginComponent } from './login/login.component';
import { ListAlunosAppComponent } from './list-alunos-app/list-alunos-app.component';
import { ListCursosAppComponent } from './list-cursos-app/list-cursos-app.component';
import { ListMatriculaAppComponent } from './list-matricula-app/list-matricula-app.component';
import { ListTurmaAppComponent } from './list-turma-app/list-turma-app.component';
import { RegisterAppComponent } from './register-app/register-app.component';
import { HomeComponent } from './home-page/home.component';
import { HomeModule } from './home-page/home.module';
import {LoginService} from "./login/login.service";
import {CursoService} from './list-cursos-app/cursos.service';
import {AlunoService} from './list-alunos-app/aluno.service';


const routes: Routes = [
  {
    path: 'registeruser',
    component: RegisterAppComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashComponent,
    children:
    [
                {
                path: 'dashboard-list-cursos',
                component: ListCursosAppComponent
                },
                {
                  path: 'dashboard-list-alunos',
                  component: ListAlunosAppComponent
                },
                {
                  path: 'dashboard-list-matricula',
                  component: ListMatriculaAppComponent
                },
                {
                  path: 'dashboard-list-turma',
                  component: ListTurmaAppComponent
                }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    LoginComponent,
    ListAlunosAppComponent,
    ListCursosAppComponent,
    ListMatriculaAppComponent,
    ListTurmaAppComponent,
    RegisterAppComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
  ],
  
  providers: [LoginService,RegisterService,CursoService,AlunoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
