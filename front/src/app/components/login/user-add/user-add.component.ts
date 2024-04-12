import { Component } from '@angular/core';
import { NewUser } from '../../../models/user.model';
import { UserService } from '../../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})

export class UserAddComponent {

  /**
   * *ATRIBUTOS: 
   */
  errorMessage : string[] = [];
  newUser: NewUser = {
    nombre: '',
    apellido1: '',
    apellido2: '',
    username: '',
    email: '',
    dni: '',
    password: ''    
  };
  
  /**
   * *CONSTRUCTOR:
   */
  constructor(private userService: UserService, private router: Router) { }

  /**
   * *MÉTODOS: 
   */
  addUser() {
    this.errorMessage = [];
    this.userService.addUser(this.newUser).subscribe({
      next: (response) => {
        
        console.log('Usuario creado con éxito', response);
        
        // limpiar el formulario
        this.newUser = {
          nombre: '',
          apellido1: '',
          apellido2: '',
          username: '',
          email: '',
          dni: '',
          password: ''
        };

        // redirección a la lista de
        this.router.navigate(['/list-users']);

      },
      error: (error) => {
        console.log("Error/es al crear el usuario: ", error);
        if (error.messages !== undefined) {
          error.messages.forEach((messageArray: string[]) => {
            messageArray.forEach((message) => {
              this.errorMessage.push(message);
            });
          });        }

      }
    });
  }
}
