import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FullnamePipe } from './fullname-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UpperCasePipe, DatePipe, FullnamePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  currentDate = new Date();
  person = {
    name: 'foo',
    surname: 'bar'
  }
}
