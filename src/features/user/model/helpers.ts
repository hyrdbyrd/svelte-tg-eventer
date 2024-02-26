import type { User } from '@/entities/user';

/**
 * Формирование уникального id основанного на id события и id пользователя
 * @param user Клиентский или данные из api о пользователе
 * @returns Уникальный id основанный на id события и id пользователя
 */
export const getUniqId = (user: User) => `${user.eventId}~${user.meta.id}`;

/**
 * Поиск индекса в списке, где находиться искомый пользователь
 * @param users Список пользователей
 * @param apiUser Искомый пользователь
 * @returns Возвращает результат вызова Array.prototype.findIndex
 */
export function findUserIndexByApiUser(users: User[], apiUser: User) {
	return users.findIndex((user) => getUniqId(user) === getUniqId(apiUser));
}

/**
 * Фильтрация списка apiUser в уникальных (только что созданных) пользователей
 * @param users Список пользователей
 * @param apiUsers Спиосок пользователей, где могут быть дубли
 * @returns Возвращает отфильтрованный список apiUsers от дублей
 */
export function filterExistingUsers(users: User[], apiUsers: User[]) {
	const ids = new Set(users.map(getUniqId));
	return apiUsers.filter((user) => !ids.has(getUniqId(user)));
}
