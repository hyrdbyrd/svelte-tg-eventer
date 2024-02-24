export const RequestType = {
	/** Случай когда type не пришел */
	idle: 'idle',
	/**
	 * Если type = rating, meetingId это индекс встречи, которую
	 * нужно открыть в разделе прошедшие встречи (со звёздочками)
	 */
	rating: 'rating',
	/**
	 * Если type = request, в meetingId индекс встречи с человеком,
	 * запрос от которого нужно открыть с главной страницы
	 * в разделе мои встречи (запрос это тоже встреча, потому что он живёт в моих встречах)
	 */
	request: 'request',
	/**
	 * Если type = fastmeeting, meetingId это индекс встречи оттуда же,
	 * просто она не запрос а уже принялась
	 */
	fastmeeting: 'fastmeeting'
};

export interface ApiUserMeta {
	userId: number;
	eventId: number;
	userInfo: string;
	userName: string;
	photoLink?: string | null;
}

export interface ApiUser extends ApiUserMeta {
	telegramId: number;
	telegramName: string;
}

export interface Telegram {
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
	telegram: Telegram;
}

export type RequestType = keyof typeof RequestType;
