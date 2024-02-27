import { createStore } from 'effector';

import type { User } from '@/entities/user';

import { getAllUsersFx } from './effects';
import { updateUsers, userRegistered } from './events';

import { findUserIndexByApiUser, filterExistingUsers } from './helpers';

export const users = createStore<User[]>([])
	.on(getAllUsersFx.doneData, (state, users) => state.concat(filterExistingUsers(state, users)))
	.on(userRegistered, (state, user) => [...state, user])
	.on(updateUsers, (state, user) => {
		const idx = findUserIndexByApiUser(state, user);
		if (idx !== -1) {
			state[idx] = user;
			return [...state];
		}

		return state;
	});
