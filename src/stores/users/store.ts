import { createStore } from 'effector';

import type { User } from '@/types';

import { updateUsers } from './events';
import { getAllUsersFx } from './effects';

import { findUserIndexByApiUser, mapApiUserToClient, filterExistingUsers } from './helpers';

export const users = createStore<User[]>([])
	.on(getAllUsersFx.doneData, (state, users) =>
		state.concat(filterExistingUsers(state, users).map(mapApiUserToClient))
	)
	.on(updateUsers, (state, user) => {
		const idx = findUserIndexByApiUser(state, user);
		if (idx !== -1) {
			state[idx].meta = mapApiUserToClient(user).meta;
			return [...state];
		}

		return state;
	});
