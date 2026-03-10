import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { Observable, of } from 'rxjs';
import { filter } from 'rxjs/operators';

interface UserInterface {
      id: string;
      name: string;
      age: number
      isActive: boolean;
    };

const filterUsers = (users$: Observable<UserInterface[]>): Observable<UserInterface[]> => {
  return users$.pipe(
    filter(users => users.some(user => user.isActive))
  );
}

let users$: Observable<UserInterface[]> = of([
  { id: '1', name: 'John', age: 30, isActive: true }, 
  { id: '2', name: 'Jane', age: 25, isActive: true }, 
  { id: '3', name: 'Bob', age: 35, isActive: false }
]);

filterUsers(users$).subscribe(filteredUsers => console.log(filteredUsers));

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
