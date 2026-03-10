import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface UserInterface {
      id: string;
      name: string;
      age: number
    };

const normalizeUsers = (users$: Observable<UserInterface[]>) : Observable<string[]> => {
  return users$.pipe(
    map(users => users.map(user => user.name))
  );
};

normalizeUsers(new Observable<UserInterface[]>(subscribe => {
  subscribe.next([
    { id: '1', name: 'John', age: 30 }, 
    { id: '2', name: 'Jane', age: 25 }, 
    { id: '3', name: 'Bob', age: 35 }])
  subscribe.complete()
}))
.subscribe(names => console.log(names));

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
