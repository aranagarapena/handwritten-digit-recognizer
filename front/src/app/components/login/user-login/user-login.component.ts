import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  public currentView: 'login' | 'register' = 'login'; // Controla qué vista mostrar

  // Método para cambiar la vista
  changeView(view: 'login' | 'register'): void {
    this.currentView = view;
  }

}
