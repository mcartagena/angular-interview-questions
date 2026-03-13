import { AsyncPipe, NgIf, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserInterface } from './user-interface';
import { BehaviorSubject, catchError, of } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe, NgIf, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  users$ = new BehaviorSubject<UserInterface[]>([]);

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
       this.httpClient
       .get<UserInterface[]>('http://localhost:3004/users')
       .pipe(
        catchError(error => {
          console.error('Error fetching users:', error);
          // Return an empty array or a default value to keep the stream alive
          return of([]);
        })
       )
       .subscribe(users => {
         this.users$.next(users);
       });
  }
}
