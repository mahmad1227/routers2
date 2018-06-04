import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Router, RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
