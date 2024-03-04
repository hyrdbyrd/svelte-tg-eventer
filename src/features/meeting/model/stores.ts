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
	joinMeetingFx,
	getUserMeetingsFx,
	sendMeetingRequestFx,
	createCustomMeetingFx,
	getEndedUserMeetingsFx,
	acceptMeetingRequestFx,
	rejectMeetingRequestFx,
	getAvailableCustomMeetingsFx,
} from './effects';
import { eraseMeet, updateMeeting, addMeeting } from './helpers';

export const availableMeetings = createStore<Meeting[]>([], { name: 'availableMeetings' })
	.on(newAvailableMeeting, (state, meet) => addMeeting(state, meet))
	.on(getAvailableCustomMeetingsFx.doneData, (_, state) => state)
	.on(joinMeetingFx.doneData, (state, meet) => eraseMeet(state, meet.id!))
	.on(meetingUpdated, (state, meet) => updateMeeting(state, meet, 'AVAILABLE'))
	.on(someMeetingBecomeUnAvailable, (state, meet) => eraseMeet(state, meet.id!));

export const myMeetings = createStore<Meeting[]>([], { name: 'myMeetings' })
	.on(getUserMeetingsFx.doneData, (_, state) => state)
	.on(meetingUpdated, (state, meet) => updateMeeting(state, meet, 'MY'))
	// Присоединяемся ко встречам
	.on(fastMeetingUserFound, (state, meet) => addMeeting(state, meet))
	.on(joinMeetingFx.doneData, (state, meet) => addMeeting(state, meet))
	// Уходим со встреч / встречи заканчиваются
	.on(meetingEnd, (state, meet) => eraseMeet(state, meet.id!))
	.on(leftMeetingFx.doneData, (state, { meetingId }) => eraseMeet(state, Number(meetingId)))
	// Организатор автоматом попадет на встречу
	.on(createCustomMeetingFx.doneData, (state, meet) => addMeeting(state, meet))
	// Работа с митингом с типом REQUEST
	.on(sendMeetingRequestFx.doneData, (state, meet) => [...state, meet])
	.on(acceptMeetingRequestFx.doneData, (state, meet) => updateMeeting(state, meet, 'MY'))
	.on(rejectMeetingRequestFx.doneData, (state, meet) => eraseMeet(state, meet.meetingId!));

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
