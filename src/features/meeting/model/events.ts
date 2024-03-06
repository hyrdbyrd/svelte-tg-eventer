import { fromObservable } from 'effector';

import {
	meetingEnd$,
	type Meeting,
	type ApiMeeting,
	meetingUpdated$,
	meetingBecomeEnd$,
	triggerMyMeeting$,
	newAvailableMeeting$,
	someMeetingBecomeUnAvailable$,
} from '@/entities/meeting';

export const meetingEnd = fromObservable<Meeting>(meetingEnd$);
export const meetingUpdated = fromObservable<ApiMeeting>(meetingUpdated$);
export const meetingBecomeEnd = fromObservable<Meeting>(meetingBecomeEnd$);
export const triggerMyMeeting = fromObservable<Meeting>(triggerMyMeeting$);
export const newAvailableMeeting = fromObservable<Meeting>(newAvailableMeeting$);
export const someMeetingBecomeUnAvailable = fromObservable<Meeting>(someMeetingBecomeUnAvailable$);
