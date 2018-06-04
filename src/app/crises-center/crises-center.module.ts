import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisesCenterRoutingModule } from './crises-center-routing.module';
import { CrisesCenterComponent } from './crises-center.component';

@NgModule({
  imports: [
    CommonModule,
    CrisesCenterRoutingModule
  ],
  declarations: [CrisesCenterComponent]
})
export class CrisesCenterModule { }
