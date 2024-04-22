import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './components/login/user-list/user-list.component';
import { UserAddComponent } from './components/login/user-add/user-add.component';
import { UserLoginComponent } from './components/login/user-login/user-login.component';
import { UserSignInComponent } from './components/login/user-sign-in/user-sign-in.component';
import { HomeComponent } from './components/home/home/home.component';
import { NumberDrawerComponent } from './components/game/number-drawer/number-drawer.component';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageDetailsModalComponent } from './components/game/image-details-modal/image-details-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserAddComponent,
    UserLoginComponent,
    UserSignInComponent,
    HomeComponent,
    NumberDrawerComponent,
    ImageDetailsModalComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent] // componente que se inicia al arrancar la app
})
export class AppModule { }
