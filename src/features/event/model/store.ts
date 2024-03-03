import { createStore } from 'effector';

import type { HiByeEvent } from '@/entities/event';
import { getEventFx } from './effects';

export const event = createStore<HiByeEvent>({
	features: [],
	eventName: '',
	eventId: Number(new URL(location.href).searchParams.get('eventId')),
}).on(getEventFx.doneData, (_, state) => state);
