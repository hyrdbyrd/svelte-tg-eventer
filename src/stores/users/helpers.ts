import type { ApiUser, ApiUserMeta, User, Telegram } from '@/types';

/**
 * Определяет является ли user клиентскими данными
 * @param user пользователь хранящийся на клиенте или пришедший из api
 * @returns Является ли user клиентским
 */
export const isClientUser = (user: User | ApiUserMeta): user is User => 'meta' in user;

/**
 * Определяет является ли user полноценными данными, или частичными
 * @param user полные данные пользователя, или только мета-данные
 * @returns Является ли user полноценными данными, или частичными
 */
export const isFullUser = (user: ApiUser | ApiUserMeta): user is ApiUser => 'telegramId' in user;

/**
 * Формирование уникального id основанного на id события и id пользователя
 * @param user Клиентский или данные из api о пользователе
 * @returns Уникальный id основанный на id события и id пользователя
 */
export const getUniqId = (user: User | ApiUserMeta) =>
	isClientUser(user) ? `${user.eventId}~${user.meta.id}` : `${user.eventId}~${user.userId}`;

/**
 * Преобразование данных пользователя в клиентский формат
 * @param user полные данные пользователя, или только мета-данные
 * @returns Преобразованные данные пользователя в клиентский формат
 */
export function mapApiUserToClient(user: ApiUser | ApiUserMeta): User {
	const telegram: Telegram = { id: 0, userName: '' };

	if (isFullUser(user)) {
		telegram.id = user.telegramId;
		telegram.userName = user.telegramName;
	}

	return {
		telegram,
		eventId: user.eventId,
		meta: {
			id: user.userId,
			userName: user.userName,
			description: user.userInfo,
			photoLink: user.photoLink || undefined
		}
	};
}

/**
 * Поиск индекса в списке, где находиться искомый пользователь
 * @param users Список пользователей
 * @param apiUser Искомый пользователь
 * @returns Возвращает результат вызова Array.prototype.findIndex
 */
export function findUserIndexByApiUser(users: User[], apiUser: ApiUserMeta) {
	return users.findIndex((user) => getUniqId(user) === getUniqId(apiUser));
}

/**
 * Фильтрация списка apiUser в уникальных (только что созданных) пользователей
 * @param users Список пользователей
 * @param apiUsers Спиосок пользователей, где могут быть дубли
 * @returns Возвращает отфильтрованный список apiUsers от дублей
 */
export function filterExistingUsers(users: User[], apiUsers: ApiUser[]) {
	const ids = new Set(users.map(getUniqId));
	return apiUsers.filter((user) => !ids.has(getUniqId(user)));
}
