import { map } from 'rxjs';

import { fromEventSource } from '@/shared/lib/rxjs';
import { apiEventSource } from '@/shared/lib/events';

import type { ApiUserMeta } from './types';
import { mapApiUserToClient } from './helpers';

export const userRegistered$ = fromEventSource<ApiUserMeta>(apiEventSource, 'USER_REGISTERED').pipe(
	map(mapApiUserToClient),
);
export const userUpdated$ = fromEventSource<ApiUserMeta>(apiEventSource, 'USER_UPDATED').pipe(
	map(mapApiUserToClient),
);
