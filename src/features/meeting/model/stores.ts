import { combine, createStore } from 'effector';

import type { Meeting } from '@/entities/meeting';

import {
	meetingEnd,
	meetingUpdated,
	meetingBecomeEnd,
	newAvailableMeeting,
	fastMeetingUserFound,
	someMeetingBecomeUnAvailable,
} from './events';
import {
	leftMeetingFx,
	markMeetingFx,
	getUserMeetingsFx,
	getEndedUserMeetingsFx,
	getAvailableCustomMeetingsFx,
} from './effects';
import { eraseMeet, updateMeeting } from './helpers';

export const availableMeetings = createStore<Meeting[]>([], { name: 'availableMeetings' })
	.on(newAvailableMeeting, (state, meet) => [meet, ...state])
	.on(getAvailableCustomMeetingsFx.doneData, (_, state) => state)
	.on(meetingUpdated, (state, meet) => updateMeeting(state, meet, 'AVAILABLE'))
	.on(someMeetingBecomeUnAvailable, (state, meet) => eraseMeet(state, meet.id!));

export const myMeetings = createStore<Meeting[]>([], { name: 'myMeetings' })
	.on(getUserMeetingsFx.doneData, (_, state) => state)
	.on(fastMeetingUserFound, (state, meet) => [meet, ...state])
	.on(meetingEnd, (state, meet) => eraseMeet(state, meet.id!))
	.on(meetingUpdated, (state, meet) => updateMeeting(state, meet, 'MY'))
	.on(leftMeetingFx.doneData, (state, { meetingId }) => eraseMeet(state, meetingId));

export const endedMeetings = createStore<Meeting[]>([], { name: 'endedMeetings' })
	.on(meetingBecomeEnd, (state, meet) => [...state, meet])
	.on(getEndedUserMeetingsFx.doneData, (_, state) => state)
	.on(meetingUpdated, (state, meet) => updateMeeting(state, meet, 'ENDED'))
	.on(markMeetingFx.doneData, (state, { mark, meetingId, meetingNote }) => {
		const idx = state.findIndex((m) => m.id === meetingId);
		if (idx !== -1) {
			state[idx] = {
				...state[idx],
				rate: mark,
				meetingNote: meetingNote,
			};

			return [...state];
		}

		return state;
	});

export const allMeetings = combine(availableMeetings, myMeetings, endedMeetings, (av, my, en) =>
	av.concat(my, en),
);
