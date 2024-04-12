import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './components/login/user-list/user-list.component';
import { UserAddComponent } from './components/login/user-add/user-add.component';
import { UserLoginComponent } from './components/login/user-login/user-login.component';
import { UserSignInComponent } from './components/login/user-sign-in/user-sign-in.component';
import { HomeComponent } from './components/home/home/home.component';
import { NumberDrawerComponent } from './components/game/number-drawer/number-drawer.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'list-users', component: UserListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'number-drawer', component: NumberDrawerComponent },
  { path: 'add-user', component: UserAddComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige aquí como ruta por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
