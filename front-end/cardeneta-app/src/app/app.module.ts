import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashAppComponent } from './dash-app/dash-app.component';
import { LoginAppComponent } from './login-app/login-app.component';
import { ListAlunosAppComponent } from './list-alunos-app/list-alunos-app.component';
import { ListCursosAppComponent } from './list-cursos-app/list-cursos-app.component';
import { ListMatriculaAppComponent } from './list-matricula-app/list-matricula-app.component';
import { ListTurmaAppComponent } from './list-turma-app/list-turma-app.component';
import { RegisterAppComponent } from './register-app/register-app.component';

@NgModule({
  declarations: [
    AppComponent,
    DashAppComponent,
    LoginAppComponent,
    ListAlunosAppComponent,
    ListCursosAppComponent,
    ListMatriculaAppComponent,
    ListTurmaAppComponent,
    RegisterAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,LoginAppComponent,DashAppComponent
  ,ListAlunosAppComponent,ListCursosAppComponent,ListMatriculaAppComponent,
  ListTurmaAppComponent,RegisterAppComponent]
})
export class AppModule { }
