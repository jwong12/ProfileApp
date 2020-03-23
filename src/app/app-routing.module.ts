import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [{
  path: "profile",
  component: ProfileComponent,
  canActivate: [AuthGuard] // prevents users loading the profile Component
},
{
  path: "login",
  component: AuthComponent
},
{
  path: '**',
  redirectTo: 'login',
  pathMatch: 'full'
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
