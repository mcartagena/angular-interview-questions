import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface UserInterface {
      id: string;
      name: string;
      age: number
    };

export const normalizeUsers = (users$: Observable<UserInterface[]>): Observable<string[]> => {
    return users$.pipe(
        map(users => users.map(user => user.name))
    );
}