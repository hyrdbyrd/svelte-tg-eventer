import { createEffect } from 'effector';

import { getEvent } from '@/entities/event';

export const getEventFx = createEffect(getEvent);
