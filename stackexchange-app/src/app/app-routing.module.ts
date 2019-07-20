import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { ClientViewComponent } from './components/client-view/client-view.component';
import { ProfileComponent } from './components/profile/profile.component';


const appRoutes: Routes = [
  { path: 'employer-view', component: ClientViewComponent},
  { path: 'candidate-view', component: ProfileComponent},
  { path: '', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
