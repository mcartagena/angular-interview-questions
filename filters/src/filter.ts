import { Observable, filter } from 'rxjs';

export interface UserInterface {
    id: string;
    name: string;
    age: number
    isActive: boolean;
};

export const filterUsers = (users$: Observable<UserInterface[]>): Observable<UserInterface[]> => {
    return users$.pipe(
        filter(users => users.some(user => user.isActive))
    );
}
