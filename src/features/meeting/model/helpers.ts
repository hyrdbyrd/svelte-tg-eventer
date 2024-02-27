import {
	mapApiMeetingToClient,
	type ApiMeeting,
	type Meeting,
	type MeetingQueueType,
} from '@/entities/meeting';
import { findIndex } from 'rxjs';

export function eraseMeet(meetings: Meeting[], id: number) {
	const idx = meetings.findIndex((meet) => meet.id === id);
	if (idx !== -1) return meetings.toSpliced(idx, 1);
	return meetings;
}

export function updateMeeting(
	meetings: Meeting[],
	meeting: ApiMeeting,
	queueType: MeetingQueueType,
) {
	const idx = meetings.findIndex((meet) => meet.id === meeting.meetingId);
	if (idx !== -1) {
		meetings[idx] = mapApiMeetingToClient(meeting, queueType);
		return [...meetings];
	}

	return meetings;
}
