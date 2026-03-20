import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child-component/child-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isVisible:boolean = false;
  preFetchCondition:boolean = false;
}
