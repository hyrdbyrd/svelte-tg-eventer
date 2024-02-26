export interface TelegramMeta {
	id: number;
	userName: string;
}

export interface UserMeta {
	id: number;
	userName: string;
	photoLink?: string;
	description: string;
}

export interface User {
	meta: UserMeta;
	eventId: number;
	telegram: TelegramMeta;
}
