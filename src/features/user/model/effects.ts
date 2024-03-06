import { createEffect } from 'effector';

import {
	getUser,
	getUsers,
	updateUser,
	cancelFastMeeting,
	starSearchFastMeeting,
	isFastMeetingAlredyExist,
} from '@/entities/user';

type Param = { eventId: string; userId: string };

export const getUserFx = createEffect(({ eventId, userId }: Param) => getUser(eventId, userId));

export const getAllUsersFx = createEffect(getUsers);
export const updateUserFx = createEffect(updateUser);

export const isFastMeetingAlredyExistFx = createEffect(({ eventId, userId }: Param) =>
	isFastMeetingAlredyExist(eventId, userId),
);

export const starSearchFastMeetingFx = createEffect(({ eventId, userId }: Param) =>
	starSearchFastMeeting(eventId, userId),
);

export const cancelFastMeetingFx = createEffect(({ eventId, userId }: Param) =>
	cancelFastMeeting(eventId, userId),
);
