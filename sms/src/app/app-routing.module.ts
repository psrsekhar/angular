import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './student/add/add.component';
import { ListComponent } from './student/list/list.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'list', component:ListComponent},
  {path:'add',component:AddComponent},
  {path:'update/:id', component:AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
