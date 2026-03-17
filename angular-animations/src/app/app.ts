import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { trigger, transition, style, animate, state } from '@angular/animations';

// const enterTransition = transition(':enter', [
//   style({ opacity: 0 }),
//   animate('1s ease-in', style({ opacity: 1 }))
// ]);

// const exitTransition = transition(':leave', [
//   style({ opacity: 1 }),
//   animate('1s ease-out', style({ opacity: 0 }))
// ]);

// const fadeIn = trigger('fadeIn', [enterTransition]);
// const fadeOut = trigger('fadeOut', [exitTransition]);

const fadeInOut = trigger('fadeInOut', [
  state('open', style({opacity: 1})),
  state('closed', style({opacity: 0})),
  transition('open => *', [ // we can use wildcard to match any state
    animate('1s ease-out')
  ]),
  transition('closed => open', [
    animate('1s ease-in')
  ])
]);

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css',
  animations: [
    // Define your animations here
/*     fadeIn,
    fadeOut */
    fadeInOut
  ]
})
export class App {
  isShown = false;

  fadeInOut() {
    this.isShown = !this.isShown;
  }

}
