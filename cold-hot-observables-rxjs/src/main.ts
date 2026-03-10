import { observable } from './../../map-how-to-transform-data/node_modules/rxjs/src/internal/symbol/observable';
import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { Observable } from 'rxjs';

// Cold observable example
/* const observable$ = new Observable(subscriber => {
  subscriber.next(Math.random());
  subscriber.complete();
}); */

const value = Math.random();

const observable$ = new Observable(subscriber => {
  subscriber.next(value);
  subscriber.complete();
});

observable$.subscribe(value => console.log('Subscriber 1:', value));
observable$.subscribe(value => console.log('Subscriber 2:', value));

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
