import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private http:HttpClient){}

  users: User[] = [];

  ngOnInit(): void {

    this.http.get("http://api-laravel.example.com/getusers").subscribe(
      (res: any)=>{
        this.users = res.data;
        console.log("Usuarios: ",this.users);

      },
      (err)=>{console.log(err)})
  
  }
}
