import { fromObservable } from 'effector';

import { type User, userUpdated$, userRegistered$ } from '@/entities/user';

export const updateUsers = fromObservable<User>(userUpdated$);
export const userRegistered = fromObservable<User>(userRegistered$);
