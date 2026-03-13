import { AfterViewInit, Component, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit{
  @ViewChild(Child, { static: true }) child?: Child;
  @ViewChild('button', { static: true }) buttonRef?: ElementRef<HTMLButtonElement>;

  @ViewChildren(Child) children?: QueryList<Child>;
  @ViewChildren('button') buttonRefs?: QueryList<ElementRef<HTMLButtonElement>>;

  increment() {
    this.child?.increment();
  }

  ngAfterViewInit(): void {
    if(this.buttonRef?.nativeElement) {
      this.buttonRef.nativeElement.innerText = 'foo';
      console.log('Button element:', this.buttonRef);
    }
    this.children?.forEach(child => {
      console.log('Child component:', child);
    });
    this.buttonRefs?.forEach(buttonRef => {
      console.log('Button element from ViewChildren:', buttonRef);
    });
  }

}
