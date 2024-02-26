import { api } from '@/shared/lib';

import type { ApiUser } from './types';
import type { User } from '../lib/types';
import { mapApiUserToClient, mapClientUserToApi } from './helpers';

export function getUsers(eventId: string) {
	return api
		.get<ApiUser[]>(`/users/${eventId}`)
		.then((responed) => responed.data)
		.then((users) => users.map(mapApiUserToClient));
}

export function updateUser(user: User) {
	return api
		.post<ApiUser>(`/form/${user.eventId}/${user.meta.id}`, mapClientUserToApi(user))
		.then((respond) => respond.data)
		.then(mapApiUserToClient);
}

export function getUser(eventId: string, userId: string) {
	return api
		.get<ApiUser>(`/form/${eventId}/${userId}`)
		.then((responed) => responed.data)
		.then(mapApiUserToClient);
}

export function starSearchFastMeeting(eventId: string, userId: string) {
	return api.post<ApiUser>(`/meeting/get_user_for_fast_meeting`, {
		userId: Number(userId),
		eventId: Number(eventId),
	});
}
