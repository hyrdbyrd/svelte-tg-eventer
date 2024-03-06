import { api } from '@/shared/lib/handlers';

import type { User } from '../lib/types';

import type { ApiUser } from './types';
import { mapApiUserToClient, mapClientUserToApi } from './helpers';

export function getUsers(eventId: string) {
	return api
		.get<ApiUser[]>(`/users/${eventId}`)
		.then((responed) => responed.data)
		.then((users) => users.map(mapApiUserToClient));
}

export function updateUser(user: Omit<User, 'telegram'>) {
	return api
		.post<ApiUser>(`/form/${user.eventId}/${user.meta.id}`, mapClientUserToApi(user))
		.then((respond) => respond.data)
		.then(mapApiUserToClient);
}

export function getUser(eventId: string, userId: string) {
	return api
		.get<ApiUser>(`/form/${eventId}/${userId}`)
		.then((responed) => responed.data)
		.then(mapApiUserToClient)
		.then((user) => (user.meta.userName ? user : null))
		.catch(() => null);
}

export function starSearchFastMeeting(eventId: string, userId: string) {
	return api.post<ApiUser>(`/meeting/get_user_for_fast_meeting`, {
		userId: Number(userId),
		eventId: Number(eventId),
	});
}

export function isFastMeetingAlredyExist(eventId: string, userId: string) {
	return api
		.get<boolean>(`/meeting/is_fast_meeting_exist/${eventId}/${userId}`)
		.then((resp) => resp.data);
}

export function cancelFastMeeting(eventId: string, userId: string) {
	return api.get<unknown>(`/meeting/cancel_fast_meeting/${eventId}/${userId}`);
}
