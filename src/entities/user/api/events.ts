import { map } from 'rxjs';

import { fromEventSource, apiEventSource } from '@/shared/lib';

import type { ApiUserMeta } from './types';
import { mapApiUserToClient } from './helpers';

export const opened$ = fromEventSource<void>(apiEventSource, 'open');
export const errored$ = fromEventSource<Error>(apiEventSource, 'error');

export const userRegistered$ = fromEventSource<unknown>(apiEventSource, 'USER_REGISTERED');
export const userUpdated$ = fromEventSource<ApiUserMeta>(apiEventSource, 'USER_UPDATED').pipe(
	map(mapApiUserToClient)
);
