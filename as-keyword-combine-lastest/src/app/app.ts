import { AsyncPipe, NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { combineLatest, of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  foo$ = of('foo');
  bar$ = of('bar');
  baz$ = of('baz');

  data$ = combineLatest({
   foo: this.foo$,
   bar: this.bar$,
   baz: this.baz$
  });
}
