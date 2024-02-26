import { fromObservable } from 'effector';

import {
	type Meeting,
    meetingEnd$,
	newAvailableMeeting$,
	fastMeetingUserFound$,
	someMeetingBecomeUnAvailable$,
} from '@/entities/meeting';

export const meetingEnd = fromObservable<Meeting>(meetingEnd$);
export const newAvailableMeeting = fromObservable<Meeting>(newAvailableMeeting$);
export const fastMeetingUserFound = fromObservable<Meeting>(fastMeetingUserFound$);
export const someMeetingBecomeUnAvailable = fromObservable<Meeting>(someMeetingBecomeUnAvailable$);
