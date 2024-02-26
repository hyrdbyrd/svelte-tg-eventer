import { fromObservable } from 'effector';

import { type User, userUpdated$ } from '@/entities/user';

export const updateUsers = fromObservable<User>(userUpdated$);
