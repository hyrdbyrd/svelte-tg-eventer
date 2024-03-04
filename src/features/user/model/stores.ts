import { createStore } from 'effector';

import type { User } from '@/entities/user';

import { getAllUsersFx, updateUserFx } from './effects';
import { updateUsers, userRegistered } from './events';

import { findUserIndexByApiUser, filterExistingUsers } from './helpers';

function updateUser(state: User[], user: User) {
	const idx = findUserIndexByApiUser(state, user);
	if (idx !== -1) {
		state[idx] = user;
		return [...state];
	}

	return state;
}

export const users = createStore<User[]>([], { name: 'users' })
	.on(getAllUsersFx.doneData, (state, users) => state.concat(filterExistingUsers(state, users)))
	.on(userRegistered, (state, user) => [...state, user])
	.on(updateUserFx.doneData, updateUser)
	.on(updateUsers, updateUser);
