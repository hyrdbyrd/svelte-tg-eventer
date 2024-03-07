import { createStore } from 'effector';

import type { User } from '@/entities/user';

import {
	updateUserFx,
	getAllUsersFx,
	cancelFastMeetingFx,
	starSearchFastMeetingFx,
	isFastMeetingAlredyExistFx,
} from './effects';
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

function addUser(state: User[], user: User) {
	const idx = findUserIndexByApiUser(state, user);
	if (idx !== -1) {
		state[idx] = user;
		return [...state];
	}

	return [...state, user];
}

export const users = createStore<User[]>([], { name: 'users' })
	.on(getAllUsersFx.doneData, (state, users) => state.concat(filterExistingUsers(state, users)))
	.on(userRegistered, addUser)
	.on(updateUserFx.doneData, updateUser)
	.on(updateUsers, updateUser);

export const isUserFastMeetingStarted = createStore<boolean>(false)
	.on(cancelFastMeetingFx.doneData, () => false)
	.on(starSearchFastMeetingFx.doneData, () => true)
	.on(isFastMeetingAlredyExistFx.doneData, (_, value) => value);
