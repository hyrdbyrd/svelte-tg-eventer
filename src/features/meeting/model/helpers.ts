import {
	mapApiMeetingToClient,
	type ApiMeeting,
	type Meeting,
	type MeetingQueueType,
} from '@/entities/meeting';

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

export function addMeeting(
	meetings: Meeting[],
	meeting: Meeting
) {
	const idx = meetings.findIndex(meet => meet.id === meeting.id);
	if (idx !== -1) {
		meetings[idx] = meeting;
		return [...meetings];
	}

	return [meeting, ...meetings];
}
