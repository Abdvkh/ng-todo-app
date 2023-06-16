import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authGuard } from "./auth/auth.guard";

const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    loadChildren: () => import('./todos/todos.module').then(_ => _.TodosModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(_ => _.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
