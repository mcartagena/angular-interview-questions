import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

// 1.- how to define an array in TypeScript
let fruits: string[] = ['apple', 'banana', 'orange'];
let fruits2: Array<string> = ['apple', 'banana', 'orange'];

console.log(fruits); // Output: ['apple', 'banana', 'orange']
console.log(fruits2); // Output: ['apple', 'banana', 'orange']

// 2.- how to define an array of numbers and strings?
let values: (number | string)[] = [1, 'two', 3, 'four'];
// it's a bad practice to mix types

console.log(values); // Output: [1, 'two', 3, 'four']

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
