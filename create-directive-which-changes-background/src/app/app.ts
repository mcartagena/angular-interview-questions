import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChangesBackground } from "./changes-background";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChangesBackground],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}
