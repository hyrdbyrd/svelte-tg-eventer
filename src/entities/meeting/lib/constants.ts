export type MeetingType = keyof typeof MeetingType;
export const MeetingType = {
	REQUEST: 'REQUEST',
	FAST_MEETING: 'FAST_MEETING',
	CUSTOM_MEETING: 'CUSTOM_MEETING',
};

export type MeetingStatus = keyof typeof MeetingStatus;
export const MeetingStatus = {
	REJECTED: 'REJECTED',
	ACCEPTED: 'ACCEPTED',
	AWAITING_RESPONSE: 'AWAITING_RESPONSE',
};

export type MeetingQueueType = keyof typeof MeetingQueueType;
export const MeetingQueueType = {
	MY: 'MY',
	ENDED: 'ENDED',
	AVAILABLE: 'AVAILABLE',
};

export type SendMeetingRequestStatus = keyof typeof SendMeetingRequestStatus;
export const SendMeetingRequestStatus = {
	NOT_EXIST: 'NOT_EXIST',
	ALREADY_EXIST: 'ALREADY_EXIST',
	ALREADY_REJECTED: 'ALREADY_REJECTED',
};
