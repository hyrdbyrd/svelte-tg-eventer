import { createEffect } from 'effector';

import { userSeenRaffle, userRegisteredToRaffle, getRaffle } from '@/entities/raffle';

type RaffleParam = { eventId: string; userId: string };

export const userSeenRaffleFx = createEffect(({ eventId, userId }: RaffleParam) =>
	userSeenRaffle(eventId, userId),
);
export const userRegisteredToRaffleFx = createEffect(({ eventId, userId }: RaffleParam) =>
	userRegisteredToRaffle(eventId, userId),
);
export const getRaffleFx = createEffect(({ eventId, userId }: RaffleParam) =>
	getRaffle(eventId, userId),
);
