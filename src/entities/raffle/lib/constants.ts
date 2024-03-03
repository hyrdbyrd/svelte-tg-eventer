export type RaffleStatus = keyof typeof RaffleStatus;
export const RaffleStatus = {
	WON: 'WON',
	NOT_WON: 'NOT_WON',
	FINISHED: 'FINISHED ',
	REGISTERED: 'REGISTERED',
	NOT_REGISTERED: 'NOT_REGISTERED',
};
