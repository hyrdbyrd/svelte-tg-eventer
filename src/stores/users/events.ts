import { fromObservable } from 'effector';

import type { ApiUserMeta } from '@/types';

import { userUpdated$ } from '@/api/events';

export const updateUsers = fromObservable<ApiUserMeta>(userUpdated$);
