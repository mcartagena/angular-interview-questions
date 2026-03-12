import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './user-service';
import { NgFor, NgIf, AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { UserInterface } from './user';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor, NgIf, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  users$: Observable<UserInterface[]>;

  constructor(private userService: UserService) {
    this.users$ = this.userService.getUsers();
  }
}
