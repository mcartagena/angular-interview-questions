import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppStateInterface } from '../types/appState.interface';
import * as UsersActions from '../store/actions';
import { selectIsLoading, selectError, selectUsers } from '../store/selectors';
import { Observable } from 'rxjs';
import { UserInterface } from '../types/user.interface';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-users-component',
  imports: [CommonModule],
  templateUrl: './users-component.html',
  styleUrls: ['./users-component.css'],
})
export class UsersComponent implements OnInit {
  selectIsLoading$: Observable<boolean>;
  selectError$: Observable<string | null>;
  selectUsers$: Observable<UserInterface[]>;

  constructor(private store: Store<AppStateInterface>) {
    this.selectIsLoading$ = this.store.pipe(select(selectIsLoading));
    this.selectError$ = this.store.pipe(select(selectError));
    this.selectUsers$ = this.store.pipe(select(selectUsers));
   }

  ngOnInit(): void {
    this.store.dispatch(UsersActions.getUsers());
  }
}
