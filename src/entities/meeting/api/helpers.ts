import type { Meeting, MeetingMeta } from '../lib/types';
import type { MeetingQueueType } from '../lib/constants';

import type { ApiMeeting } from './types';

export function mapClientMeetingTo(meeting: MeetingMeta): ApiMeeting {
	return {
		mark: meeting.rate,
		card: meeting.card,
		name: meeting.name,
		meetingId: meeting.id,
		eventId: meeting.eventId,
		userIds: meeting.userIds,
		meetingType: meeting.type,
		capacity: meeting.capacity,
		timeStart: meeting.timeStart,
		meetingStatus: meeting.status,
		description: meeting.description,
		meetingNote: meeting.meetingNote,
		organisatorId: meeting.organizatorId,
		telegramChatLink: meeting.telegramChatLink,
	};
}

export function mapApiMeetingToClient(meeting: ApiMeeting, queueType: MeetingQueueType): Meeting {
	return {
		queueType,
		rate: meeting.mark,
		card: meeting.card,
		name: meeting.name,
		id: meeting.meetingId,
		eventId: meeting.eventId,
		userIds: meeting.userIds,
		type: meeting.meetingType,
		capacity: meeting.capacity,
		timeStart: meeting.timeStart,
		status: meeting.meetingStatus,
		description: meeting.description,
		meetingNote: meeting.meetingNote,
		organizatorId: meeting.organisatorId,
		telegramChatLink: meeting.telegramChatLink,
	};
}
