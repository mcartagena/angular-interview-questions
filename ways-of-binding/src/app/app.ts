import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  value = 'Hello World';

  changeValue(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
  }

  modelChange(value: string): void {
    this.value = value;
  }
}

