import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import type { UserInterface } from './filter.ts'
import { filterUsers } from './filter.ts'
import { of } from 'rxjs';

filterUsers(of<UserInterface[]>([
  { id: '1', name: 'Alice', age: 30, isActive: true },
  { id: '2', name: 'Bob', age: 25, isActive: false },
  { id: '3', name: 'Charlie', age: 35, isActive: true },
])).subscribe(filteredUsers => {
  console.log('Filtered Users:', filteredUsers);
});

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
