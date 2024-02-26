import { api } from '@/shared/lib';

import type { MeetingMeta } from '../lib/types';

import type { ApiMeeting } from './types';
import { mapApiMeetingToClient, mapClientMeetingTo } from './helpers';

export function getUserMeetings(eventId: string, userId: string) {
	return api
		.get<ApiMeeting[]>(`/meeting/get_user_meetings/${eventId}/${userId}`)
		.then((responed) => responed.data)
		.then((meetings) => meetings.map((meet) => mapApiMeetingToClient(meet, 'MY')));
}
export function getEndedUserMeetings(eventId: string, userId: string) {
	return api
		.get<ApiMeeting[]>(`/meeting/ended_user_meetings/${eventId}/${userId}`)
		.then((respond) => respond.data)
		.then((meetings) => meetings.map((meet) => mapApiMeetingToClient(meet, 'ENDED')));
}

export function getAvailableCustomMeetings(eventId: string) {
	return api
		.get<ApiMeeting[]>(`/meeting/get_available_custom_meetings/${eventId}`)
		.then((respond) => respond.data)
		.then((meetings) => meetings.map((meet) => mapApiMeetingToClient(meet, 'AVAILABLE')));
}

export function createCustomMeeting(meeting: MeetingMeta) {
	return api.post<ApiMeeting>(
		`/meeting/create_custom_meeting/${meeting.eventId}`,
		mapClientMeetingTo(meeting),
	);
}

export function markMeetingFinished(eventId: string, userId: string, meetingId: string) {
	return api.post<unknown>(`/meeting/mark_meeting_finished/${eventId}`, {
		eventId,
		userId,
		meetingId,
	});
}

export function meetingNotHappend(eventId: string, userId: string, meetingId: string) {
	return api.post<unknown>(`/meeting/meeting_not_happend/${eventId}/${userId}`, {
		eventId,
		userId,
		meetingId,
	});
}
