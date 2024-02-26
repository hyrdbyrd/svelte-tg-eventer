import { createEffect } from 'effector';

import {
	getUserMeetings,
	meetingNotHappend,
	markMeetingFinished,
	createCustomMeeting,
	getEndedUserMeetings,
	getAvailableCustomMeetings,
} from '@/entities/meeting';

type Param = { userId: string; eventId: string };
type MeetParam = Param & { meetingId: string };

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

export const createCustomMeetingFx = createEffect(createCustomMeeting);
export const getAvailableCustomMeetingsFx = createEffect(getAvailableCustomMeetings);
