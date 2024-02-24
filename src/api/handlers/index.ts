import { api } from '@/lib';
import type { ApiUser } from '@/types';

export function getUsers(eventId: string) {
	return api.get<ApiUser[]>(`/users/${eventId}`).then((responed) => responed.data);
}
