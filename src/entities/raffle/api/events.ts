import { fromEventSource } from '@/shared/lib/rxjs';
import { apiEventSource } from '@/shared/lib/events';

import type { Raffle } from '../lib/types';

export const raffleEnd$ = fromEventSource<Raffle>(apiEventSource, 'RUFFLE_END');
