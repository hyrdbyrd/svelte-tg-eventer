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

export function getAvailableCustomMeetings(eventId: string, userId: string) {
	return api
		.get<ApiMeeting[]>(`/meeting/get_available_custom_meetings/${eventId}/${userId}`)
		.then((respond) => respond.data)
		.then((meetings) => meetings.map((meet) => mapApiMeetingToClient(meet, 'AVAILABLE')));
}

export function createCustomMeeting(meeting: MeetingMeta) {
	return api
		.post<ApiMeeting>(
			`/meeting/create_custom_meeting/${meeting.eventId}`,
			mapClientMeetingTo(meeting),
		)
		.then((respond) => respond.data)
		.then((meet) => mapApiMeetingToClient(meet, 'MY'));
}

export function markMeeting(
	eventId: string,
	userId: string,
	meetingId: string,
	mark: number,
	meetingNote: string,
) {
	return api
		.post<{
			mark: number;
			meetingId: number;
			meetingNote: string;
		}>(`/meeting/mark/${eventId}`, {
			mark,
			userId,
			eventId,
			meetingId,
			meetingNote,
		})
		.then((resp) => resp.data);
}

export function joinMeeting(eventId: string, userId: string, meetingId: string) {
	return api.post<unknown>(`/meeting/join_meeting/${eventId}/${userId}`, {
		userId,
		eventId,
		meetingId,
	});
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

export function leftMeeting(eventId: string, userId: string, meetingId: string) {
	return api
		.post<{ meetingId: number }>(`/meeting/left_meeting/${eventId}/${userId}`, {
			userId,
			eventId,
			meetingId,
		})
		.then((resp) => resp.data);
}
