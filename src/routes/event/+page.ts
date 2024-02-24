// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
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
