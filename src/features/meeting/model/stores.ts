import { combine, createStore } from 'effector';

import type { Meeting } from '@/entities/meeting';

import {
	meetingEnd,
	newAvailableMeeting,
	fastMeetingUserFound,
	someMeetingBecomeUnAvailable,
} from './events';
import { getAvailableCustomMeetingsFx, getUserMeetingsFx, getEndedUserMeetingsFx } from './effects';

export const availableMeetings = createStore<Meeting[]>([], { name: 'availableMeetings' })
	.on(getAvailableCustomMeetingsFx.doneData, (_, state) => state)
	.on(newAvailableMeeting, (state, meet) => [meet, ...state])
	.on(someMeetingBecomeUnAvailable, (state, meet) => {
		const idx = state.findIndex((m) => m.id === meet.id);
		if (idx !== -1) {
			return state.toSpliced(idx, 1);
		}

		return state;
	});

export const myMeetings = createStore<Meeting[]>([], { name: 'myMeetings' })
	.on(getUserMeetingsFx.doneData, (_, state) => state)
	.on(fastMeetingUserFound, (state, meet) => [meet, ...state])
	.on(meetingEnd, (state, meet) => {
		const idx = state.findIndex((m) => m.id === meet.id);
		if (idx !== -1) {
			return state.toSpliced(idx, 1);
		}

		return state;
	});

export const endedMeetings = createStore<Meeting[]>([], { name: 'endedMeetings' }).on(
	getEndedUserMeetingsFx.doneData,
	(_, state) => state,
);

export const allMeetings = combine(availableMeetings, myMeetings, endedMeetings, (av, my, en) =>
	av.concat(my, en),
);
