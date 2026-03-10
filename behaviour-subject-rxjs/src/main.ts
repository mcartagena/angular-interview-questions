import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { BehaviorSubject, Subject } from 'rxjs';

interface UserInterface {
  id: string;
  name: string;
}

const users$ = new BehaviorSubject<UserInterface[]>([]);
const subject$ = new Subject();

users$.subscribe((users: UserInterface[]) => console.log('Current users:', users, users$.getValue()));
subject$.subscribe(value => console.log('Subject emitted:', value));

users$.next([
  { id: '1', name: 'John' },
  { id: '2', name: 'Jane' }
]);

subject$.next('Hello, Subject!');

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
