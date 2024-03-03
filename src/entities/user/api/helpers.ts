import type { User, TelegramMeta } from '../lib/types';

import type { ApiUser, ApiUserMeta } from './types';

/**
 * Определяет является ли user полноценными данными, или частичными
 * @param user полные данные пользователя, или только мета-данные
 * @returns Является ли user полноценными данными, или частичными
 */
export const isFullUser = (user: ApiUser | ApiUserMeta): user is ApiUser => 'telegramId' in user;

/**
 * Преобразование данных пользователя в клиентский формат
 * @param user полные данные пользователя, или только мета-данные
 * @returns Преобразованные данные пользователя в клиентский формат
 */
export function mapApiUserToClient(user: ApiUser | ApiUserMeta): User {
	const telegram: TelegramMeta = { id: 0, userName: '' };

	if (isFullUser(user)) {
		telegram.id = user.telegramId;
		telegram.userName = user.telegramName;
	}

	return {
		telegram,
		eventId: user.eventId,
		meta: {
			id: user.userId,
			description: user.userInfo,
			userName: user.userName || '',
			photoLink: user.photoLink || undefined,
		},
	};
}

export function mapClientUserToApi(user: Omit<User, 'telegram'>): ApiUserMeta {
	return {
		userId: user.meta.id,
		eventId: user.eventId,
		userName: user.meta.userName,
		userInfo: user.meta.description,
		photoLink: user.meta.photoLink || null,
	};
}
