import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, ɵSWITCH_COMPILE_NGMODULE__POST_R3__ } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import {FormBuilder} from '@angular/forms';


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


const routes: Routes = [
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
    component: DashComponent
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
    RegisterAppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
