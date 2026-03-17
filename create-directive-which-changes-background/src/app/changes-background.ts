import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangesBackground]',
})
export class ChangesBackground {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

}
