import { fromObservable } from 'effector';

import { type Raffle, raffleEnd$ } from '@/entities/raffle';

export const raffleEnd = fromObservable<Raffle>(raffleEnd$);
