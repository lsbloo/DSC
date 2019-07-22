import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashAppComponent } from './dash-app/dash-app.component';
import { LoginAppComponent } from './login-app/login-app.component';

@NgModule({
  declarations: [
    AppComponent,
    DashAppComponent,
    LoginAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,LoginAppComponent,DashAppComponent]
})
export class AppModule { }
