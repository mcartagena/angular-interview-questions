import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription, take, takeWhile, Subject, takeUntil } from 'rxjs';
import { Unsub } from '../unsub';

@Component({
  selector: 'app-users-component',
  imports: [AsyncPipe],  // second way to handle the observable using the async pipe
  templateUrl: './users-component.html',
  styleUrl: './users-component.css',
})

// sixth way to handle the observable using an abstract class
export class UsersComponent extends Unsub implements OnInit { // , OnDestroy {
  data$ = interval(1000);
  // first way to handle the observable
  // dataSubscription?: Subscription;
  // five way to handle the observable
  // unsubscribe$ = new Subject<void>();

  ngOnInit(): void {
    // first way to handle the observable
    // this.dataSubscription = this.data$.subscribe((value) => {
    //   console.log(value);
    // });

    // third way to handle the observable using take
    // this.data$.pipe(take(1)).subscribe((value) => {
    //   console.log(value);
    // });
    // fourth way to handle the observable using takeWhile
    // this.data$.pipe(takeWhile(value => value < 5)).subscribe((value) => {
    //   console.log(value);
    // });
    // fifth way to hanble the observable using
    this.data$.pipe(takeUntil(this.unsubscribe$)).subscribe((value) => {
      console.log(value);
    });
  }

//  ngOnDestroy(): void {
    // first way to handle the observable
    // Here we should unsubscribe from the observable to prevent memory leaks
    // this.dataSubscription?.unsubscribe();
    // fifth way to handle the observable
//    this.unsubscribe$.next();
//    this.unsubscribe$.complete();
//  }
}
