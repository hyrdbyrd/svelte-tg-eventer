import type { ApiEvent } from './types';
import type { HiByeEvent } from '../lib/types';

export function mapApiEventToClient(event: ApiEvent): HiByeEvent {
	return {
		eventId: event.eventId,
		eventName: event.eventName,
		features: event.features.filter((feat) => feat.isAllowed).map((feat) => feat.featureName),
	};
}
