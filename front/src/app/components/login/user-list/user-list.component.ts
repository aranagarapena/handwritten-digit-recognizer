import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../models/user.model';
import { UserService } from '../../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  
  users: User[] = [];

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
      this.userService.getUsers().subscribe(
        {
          next: (response) => 
          {
            console.log('Usuarios recogidos con éxito', response);
            this.users = response.data;
            // this.router.navigate(['/list-users']);
          },
          error: (error) => 
          {
            console.error('Ocurrió un error al crear el usuario', error);
          }
        }
    );
  }
}
