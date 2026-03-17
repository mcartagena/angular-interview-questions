import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ViewChild } from '@angular/core';
import { NgZone } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  @ViewChild('element', { static: true }) element!: any;
  position = { x: 0, y: 0 };

  constructor(private zone: NgZone) {}

  onMouseDown(event: MouseEvent) {
    this.element = event.target;
    this.zone.runOutsideAngular(() => {
      window.document.addEventListener('mousemove', this.onMouseMove.bind(this));
    });
  }

  onMouseMove(event: MouseEvent){
    event.preventDefault();
    this.element.setAttribute('x', event.clientX);
    this.element.setAttribute('y', event.clientY);
  };

  onMouseUp(event: MouseEvent) {
    console.log('Mouse up');
    this.zone.runOutsideAngular(() => {
      this.position = {
        x: this.element.getAttribute('x'),
        y: this.element.getAttribute('y')
      };
    });
    window.document.removeEventListener('mousemove', this.onMouseMove);
  }
}
