import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {"path": "", component: HomeComponent},
  {"path": "add", component: AddComponent},
  {"path": "list", component: ListComponent},
  {"path": "update/:id", component: AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
