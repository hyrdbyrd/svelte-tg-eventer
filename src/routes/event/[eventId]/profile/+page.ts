export const prerender = true;

export const ssr = false;

export function load() {
	return {
		meta: {
			// TODO: i18n
			title: 'Анкета',
			description: 'Настройте параметры своейго профиля'
		}
	};
}
