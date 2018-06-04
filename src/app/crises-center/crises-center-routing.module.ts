import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrisesCenterComponent} from './crises-center.component';

const routes: Routes = [
  { path: 'crisis-center', component: CrisesCenterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisesCenterRoutingModule { }
