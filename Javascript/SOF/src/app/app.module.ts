import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {RouterModule, Routes} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { OutputComponent } from './output/output.component';
import { FormsModule } from '@angular/forms';
=======
// import { OutputComponent } from './output/output.component';
import { HomeComponent } from './home/home.component';
import { CreateEmployeeComponent } from './employee/create-employee.component';
import { ListEmployeeComponent } from './employee/list-employee.component';

import {ReactiveFormsModule} from '@angular/forms'

>>>>>>> 70edd0fc59a30aa9e5791c1688a29835c726be4d

@NgModule({
  declarations: [
    AppComponent,
    // OutputComponent,
    HomeComponent,
    CreateEmployeeComponent,
    ListEmployeeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
    FormsModule
=======
    AppRoutingModule,
    ReactiveFormsModule
>>>>>>> 70edd0fc59a30aa9e5791c1688a29835c726be4d
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
