import type { RaffleStatus } from './constants';

export interface Raffle {
	isUserSeen: boolean;
	status: RaffleStatus;
	prizeName?: Nil<string>;
}
