import type { MeetingStatus, MeetingType, MeetingQueueType } from './constants';

export interface MeetingMeta {
	eventId: number;
	type: MeetingType;
	organizatorId: number;
	status: MeetingStatus;

	id?: Nil<number>;
	card?: Nil<number>;
	rate?: Nil<number>;
	name?: Nil<string>;
	capacity?: Nil<number>;
	userIds?: Nil<number[]>;
	timeStart?: Nil<string>;
	meetingNote?: Nil<string>;
	description?: Nil<string>;
}

export interface Meeting extends MeetingMeta {
	queueType: MeetingQueueType;
}
