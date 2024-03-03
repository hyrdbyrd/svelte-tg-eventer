import { api } from '@/shared/lib/handlers';

import type { ApiEvent } from './types';
import { mapApiEventToClient } from './helpers';

export function getEvent(eventId: string) {
	return api
		.get<ApiEvent>(`/events/${eventId}`)
		.then((responed) => responed.data)
		.then(mapApiEventToClient);
}
