import { createStore } from 'effector';

import type { User } from '@/entities/user';

import { updateUsers } from './events';
import { getAllUsersFx } from './effects';

import { findUserIndexByApiUser, filterExistingUsers } from './helpers';

export const users = createStore<User[]>([])
	.on(getAllUsersFx.doneData, (state, users) => state.concat(filterExistingUsers(state, users)))
	.on(updateUsers, (state, user) => {
		const idx = findUserIndexByApiUser(state, user);
		if (idx !== -1) {
			state[idx] = user;
			return [...state];
		}

		return state;
	});
