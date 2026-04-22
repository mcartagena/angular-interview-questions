import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UsersService } from "../users-service";
import * as UsersActions from './actions';
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class UsersEffects {
  getUsers$;

  constructor(private actions$: Actions, private usersService: UsersService) {
    this.getUsers$ = createEffect(() =>
      this.actions$.pipe(
        ofType(UsersActions.getUsers),
        mergeMap(() => {
          return this.usersService.getUsers().pipe(
            map(users => UsersActions.getUsersSuccess({ users })),
            catchError(error => of(UsersActions.getUsersFailure({ error: error.message })))
          );
        })
      )
    );
  }
}
