import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authGuard } from "./auth/auth.guard";

const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    loadChildren: () => import('./todos/todos-routing.module').then(_ => _.TodosRoutingModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth-routing.module').then(_ => _.AuthRoutingModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
