import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/login/user-list/user-list.component';
import { UserAddComponent } from './components/login/user-add/user-add.component';
import { UserLoginComponent } from './components/login/user-login/user-login.component';
import { UserSignInComponent } from './components/login/user-sign-in/user-sign-in.component';

const routes: Routes = [
  { path: 'list-users', component: UserListComponent },
  { path: 'add-user', component: UserAddComponent },
  { path: '', redirectTo: '/list-users', pathMatch: 'full' }, // Redirect to `list-users` as a default route
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserAddComponent,
    UserLoginComponent,
    UserSignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes) // Add this line

  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
