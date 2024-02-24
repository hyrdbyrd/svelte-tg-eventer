import type { ApiUserMeta } from '@/types';
import { fromEventSource, apiEventSource } from '@/lib';

export const opened$ = fromEventSource<void>(apiEventSource, 'open');
export const errored$ = fromEventSource<Error>(apiEventSource, 'error');

export const userRegistered$ = fromEventSource<unknown>(apiEventSource, 'USER_REGISTERED');
export const userUpdated$ = fromEventSource<ApiUserMeta>(apiEventSource, 'USER_UPDATED');
