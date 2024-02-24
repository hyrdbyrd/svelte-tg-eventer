import { createEffect } from 'effector';

import { getUsers } from '@/api/handlers';

export const getAllUsersFx = createEffect(getUsers);
