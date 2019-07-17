import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListEmployeeComponent } from './employee/list-employee.component';
import { CreateEmployeeComponent } from './employee/create-employee.component';

const appRoutes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  // exports: [RouterModule]
  // declarations: []
  exports: [RouterModule]
})
export class AppRoutingModule { }
