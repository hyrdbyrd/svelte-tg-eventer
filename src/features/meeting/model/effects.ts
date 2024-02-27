import { createEffect } from 'effector';

import {
	leftMeeting,
	joinMeeting,
	markMeeting,
	getUserMeetings,
	meetingNotHappend,
	markMeetingFinished,
	createCustomMeeting,
	getEndedUserMeetings,
	isRequestAlredyExist,
	getAvailableCustomMeetings,
} from '@/entities/meeting';

type Param = { userId: string; eventId: string };
type MeetParam = Param & { meetingId: string };
type MarkMeetParam = MeetParam & { mark: number; meetingNote: string };

export const getUserMeetingsFx = createEffect(({ userId, eventId }: Param) =>
	getUserMeetings(eventId, userId),
);
export const getEndedUserMeetingsFx = createEffect(({ userId, eventId }: Param) =>
	getEndedUserMeetings(eventId, userId),
);
export const meetingNotHappendFx = createEffect(({ userId, eventId, meetingId }: MeetParam) =>
	meetingNotHappend(eventId, userId, meetingId),
);
export const markMeetingFinishedFx = createEffect(({ eventId, userId, meetingId }: MeetParam) =>
	markMeetingFinished(eventId, userId, meetingId),
);
export const markMeetingFx = createEffect(
	({ eventId, userId, meetingId, mark, meetingNote }: MarkMeetParam) =>
		markMeeting(eventId, userId, meetingId, mark, meetingNote),
);
export const joinMeetingFx = createEffect(({ eventId, userId, meetingId }: MeetParam) =>
	joinMeeting(eventId, userId, meetingId),
);
export const leftMeetingFx = createEffect(({ eventId, userId, meetingId }: MeetParam) =>
	leftMeeting(eventId, userId, meetingId),
);
export const getAvailableCustomMeetingsFx = createEffect(({ userId, eventId }: Param) =>
	getAvailableCustomMeetings(eventId, userId),
);
export const isRequestAlredyExistFx = createEffect(
	({ eventId, userFromId, userToId }: { eventId: string; userFromId: string; userToId: string }) =>
		isRequestAlredyExist(eventId, userFromId, userToId),
);

export const createCustomMeetingFx = createEffect(createCustomMeeting);
