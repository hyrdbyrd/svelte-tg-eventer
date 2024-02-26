export interface ApiUserMeta {
	userId: number;
	eventId: number;
	userInfo: string;
	userName: string;
	photoLink?: Nil<string>;
}

export interface ApiUser extends ApiUserMeta {
	telegramId: number;
	telegramName: string;
}
