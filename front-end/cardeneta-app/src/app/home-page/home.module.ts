import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent
  ],
  imports: [
      RouterModule
  ],

})
export class HomeModule { }
