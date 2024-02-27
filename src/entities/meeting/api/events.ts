import { map } from 'rxjs';

import { fromEventSource, apiEventSource } from '@/shared/lib';

import type { ApiMeeting } from './types';
import { mapApiMeetingToClient } from './helpers';

export const newAvailableMeeting$ = fromEventSource<ApiMeeting>(
	apiEventSource,
	'NEW_AVAILABLE_MEETING',
).pipe(map((meet) => mapApiMeetingToClient(meet, 'AVAILABLE')));

export const someMeetingBecomeUnAvailable$ = fromEventSource<ApiMeeting>(
	apiEventSource,
	'SOME_MEETING_BECOME_UN_AVAILABLE',
).pipe(map((meet) => mapApiMeetingToClient(meet, 'AVAILABLE')));

export const meetingEnd$ = fromEventSource<ApiMeeting>(apiEventSource, 'METTING_END').pipe(
	map((meet) => mapApiMeetingToClient(meet, 'MY')),
);

export const meetingBecomeEnd$ = fromEventSource<ApiMeeting>(
	apiEventSource,
	'METTING_BECOME_END',
).pipe(map((meet) => mapApiMeetingToClient(meet, 'ENDED')));

export const fastMeetingUserFound$ = fromEventSource<ApiMeeting>(
	apiEventSource,
	'FAST_MEETING_USER_FOUND',
).pipe(map((meet) => mapApiMeetingToClient(meet, 'MY')));

export const meetingUpdated$ = fromEventSource<ApiMeeting>(apiEventSource, 'MEETING_UPDATED');
