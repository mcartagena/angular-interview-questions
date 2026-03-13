import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  count = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
