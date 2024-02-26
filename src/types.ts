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
	/** Если type = fastmeeting, meetingId это индекс уже принятой встречи */
	fastmeeting: 'fastmeeting'
};

export type RequestType = keyof typeof RequestType;
