/*import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrisesCenterComponent} from './crises-center.component';

const routes: Routes = [
  { path: 'crises', component: CrisesCenterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisesCenterRoutingModule { }*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { CrisisCenterHomeComponent } from './crisis-center-home.component';
//import { CrisisListComponent }       from './crisis-list.component';
//import { CrisisCenterComponent } from './crisis-center.component';
import { CrisesCenterComponent } from './crises-center.component';
//import { CrisisDetailComponent }     from './crisis-detail.component';

//import { CanDeactivateGuard }     from '../can-deactivate-guard.service';
//import { CrisisDetailResolver }   from './crisis-detail-resolver.service';

const crisisCenterRoutes: Routes = [
  {
    path: '',
    component: CrisesCenterComponent,
    /*children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {
            path: ':id',
            component: CrisisDetailComponent,
            canDeactivate: [CanDeactivateGuard],
            resolve: {
              crisis: CrisisDetailResolver
            }
          },
          {
            path: '',
            component: CrisisCenterHomeComponent
          }
        ]
      }
    ]*/
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(crisisCenterRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CrisisDetailResolver
  ]
})
export class CrisisCenterRoutingModule { }
