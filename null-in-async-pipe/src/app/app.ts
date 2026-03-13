import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from "./todo-component/todo-component";
import { AsyncPipe, NgIf } from '@angular/common';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoComponent, AsyncPipe, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  currentPage$ = of(10);

}
