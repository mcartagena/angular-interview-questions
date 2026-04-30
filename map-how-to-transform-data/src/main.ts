import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";

import { normalizeUsers } from "./transform.ts";
import type { UserInterface } from "./transform.ts";
import { Observable } from "rxjs";

normalizeUsers(
  new Observable<UserInterface[]>((subscription) => {
    subscription.next([
      { id: "1", name: "Alice", age: 30 },
      { id: "2", name: "Bob", age: 25 },
      { id: "3", name: "Charlie", age: 35 },
    ]);
    subscription.complete();
  }),
).subscribe((names) => {
  console.log(names);
});

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
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
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
