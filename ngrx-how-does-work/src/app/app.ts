import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersComponent } from './users-component/users-component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, UsersComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('ngrx-how-does-work');
}
