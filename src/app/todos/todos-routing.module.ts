import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ListComponent} from "./list/list.component";
import {authGuard} from "../auth/auth.guard";

const routes: Routes = [
  {
    path: '',
    canActivateChild: [authGuard],
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
