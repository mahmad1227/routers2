import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import {Router} from '@angular/router';
import {AppComponent} from './app.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
