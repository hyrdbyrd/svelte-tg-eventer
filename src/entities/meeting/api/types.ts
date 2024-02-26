import type { MeetingStatus, MeetingType } from '../lib/constants';

export interface ApiMeeting {
	eventId: number;
	organisatorId: number;
	meetingType: MeetingType;
	meetingStatus: MeetingStatus;

	mark?: Nil<number>;
	name?: Nil<string>;
	card?: Nil<number>;
	capacity?: Nil<number>;
	timeStart?: Nil<string>;
	meetingId?: Nil<number>;
	userIds?: Nil<number[]>;
	description?: Nil<string>;
}
