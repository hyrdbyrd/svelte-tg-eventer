import { createEffect } from 'effector';

import { getUsers, updateUser, getUser } from '@/entities/user';

export const getUserFx = createEffect(({ eventId, userId }: { eventId: string; userId: string }) =>
	getUser(eventId, userId)
);

export const getAllUsersFx = createEffect(getUsers);
export const updateUserFx = createEffect(updateUser);
