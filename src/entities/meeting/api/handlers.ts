import { api } from '@/shared/lib/handlers';

import type { MeetingMeta } from '../lib/types';
import { MeetingStatus } from '../lib/constants';

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
	return api
		.post<ApiMeeting>(`/meeting/join_meeting/${eventId}/${userId}`, {
			userId,
			eventId,
			meetingId,
		})
		.then((resp) => resp.data)
		.then((meet) => mapApiMeetingToClient(meet, 'MY'));
}

export function markMeetingFinished(eventId: string, userId: string, meetingId: string) {
	return api
		.post<unknown>(`/meeting/mark_meeting_finished/${eventId}`, {
			eventId,
			userId,
			meetingId,
		})
		.then(() => meetingId);
}

export function meetingNotHappend(eventId: string, userId: string, meetingId: string) {
	return api
		.post<unknown>(`/meeting/meeting_not_happend/${eventId}/${userId}`, {
			eventId,
			userId,
			meetingId,
		})
		.then(() => meetingId);
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

export function isRequestAlredyExist(eventId: string, userFromId: string, userToId: string) {
	return api
		.get<boolean>(`/meeting/is_request_already_exist/${eventId}/${userFromId}/${userToId}`)
		.then((resp) => resp.data);
}

export function sendMeetingRequest(eventId: string, userFromId: string, userToId: string) {
	return api
		.post<ApiMeeting>(`/meeting/${eventId}/send_meeting_request`, {
			eventId,
			idTo: userToId,
			idFrom: userFromId,
			status: MeetingStatus.AWAITING_RESPONSE,
		})
		.then((resp) => resp.data)
		.then((meet) => mapApiMeetingToClient(meet, 'MY'));
}

export function answerMeetingRequest(
	eventId: string,
	userFromId: string,
	userToId: string,
	isAccepted: boolean,
) {
	return api
		.post<ApiMeeting>(`/meeting/${eventId}/answer_meeting_request`, {
			eventId,
			idTo: userToId,
			idFrom: userFromId,
			status: isAccepted ? MeetingStatus.ACCEPTED : MeetingStatus.REJECTED,
		})
		.then((resp) => resp.data);
}
