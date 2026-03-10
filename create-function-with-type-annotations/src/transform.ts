import type { User } from './user';
import type { Profile } from './profile';

export function transform(user: User, isActive:boolean = true): Profile {
    return {
        name: user.name,
        profileUrl: `/profile/${user.name}`,
        isActive: isActive
    }
}
