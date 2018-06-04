import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'crisis-center',
    loadChildren: 'crisis-center/crisis-center.module#CrisisCenterModule',
    data: { preload: true }
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
