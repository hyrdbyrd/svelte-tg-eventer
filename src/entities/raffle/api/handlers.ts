import { api } from '@/shared/lib/handlers';

import type { Raffle } from '../lib/types';

export function getRaffle(eventId: string, userId: string) {
	return api.get<Raffle>(`/raffle/${eventId}/${userId}`).then((resp) => resp.data);
}

export function userSeenRaffle(eventId: string, userId: string) {
	return api.get<Raffle>(`/raffle/user_seen_raffle/${eventId}/${userId}`).then((resp) => resp.data);
}

export function userRegisteredToRaffle(eventId: string, userId: string) {
	return api
		.get<Raffle>(`/raffle/user_registered_to_raffle/${eventId}/${userId}`)
		.then((resp) => resp.data);
}
