import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { RoleBasedComponent } from './components/role-based/role-based.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'role-based', component: RoleBasedComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
