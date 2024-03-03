import { createStore } from 'effector';

import { type Raffle } from '@/entities/raffle';

import { raffleEnd } from './events';
import { getRaffleFx, userRegisteredToRaffleFx, userSeenRaffleFx } from './effects';

export const raffle = createStore<Raffle>({
	isUserSeen: false,
	status: 'NOT_REGISTERED',
})
	.on(getRaffleFx.doneData, (_, raffle) => raffle)
	.on(userRegisteredToRaffleFx.doneData, (state) => ({
		...state,
		status: 'REGISTERED',
	}))
	.on(userSeenRaffleFx.doneData, (state) => ({
		...state,
		isUserSeen: true,
	}))
	.on(raffleEnd, (_, raffle) => raffle);
